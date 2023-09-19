import { Box } from "@mui/material";
import Choice from "../Choice/Choice";
import { Roles } from "../../ts/roles";
import { SxProps, Theme } from "@mui/material/styles";
import type { RootState } from "../../app/store";
import coords from "../../ts/coords";
import { setUserChoice } from "./chooseSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Animation from "../Animation/Animation";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
    CHOOSE_CHOICES_CONTAINER: "choose-choices-container",
    CHOOSE_PICKED_TEXT_CONTAINER: "choose-picked-text-container",
    CHOOSE_HOUSE_PICK_CONTAINER: "choose-house-pick-container",
    CHOOSE_HOUSE_PICK_PLACEHOLDER: "choose-house-pick-placeholder",
};

const Choose = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    const chosenChoiceScale = 1.55;
    const userChoice = useSelector(
        (state: RootState) => state.choose.userChoice
    );
    const dispatch = useDispatch();
    const choices = Object.keys(Roles).map((role, index) => {
        const chosen = role === userChoice;
        const choiceCoords = chosen
            ? coords.userChoice
            : coords.choiceCoords[index];
        return (
            <Choice
                sx={{
                    ...choiceCoords,
                    position: "absolute",
                    opacity: userChoice && !chosen ? 0 : 1,
                    cursor: userChoice ? "default" : "pointer",
                    transform: {
                        md: chosen ? `scale(${chosenChoiceScale})` : "none",
                    },
                    transition:
                        "top 1s, left 1s, right 1s, bottom 1s, transform 0.1s, opacity 1s",
                    ":hover": {
                        transform: {
                            md: chosen
                                ? `scale(${chosenChoiceScale})`
                                : "scale(1.05)",
                        },
                    },
                }}
                key={role}
                role={role}
                onClick={() => !userChoice && dispatch(setUserChoice(role))}
            />
        );
    });

    const [showAnimation, setShowAnimation] = useState(false);

    return (
        <Box
            data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}
            sx={{
                // outline: "1px solid red",
                width: "100%",
                ...sx,
            }}
        >
            {" "}
            <Box
                sx={{
                    maxWidth: {
                        xs: "11.7rem",
                        md: userChoice ? "23.8rem" : "17.5rem",
                    },
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                <Box
                    data-testid={CHOOSE_TESTIDS.CHOOSE_PICKED_TEXT_CONTAINER}
                    sx={{
                        // outline: "1px solid yellow",
                        fontSize: { xs: "0.93rem" },
                        letterSpacing: "2px",
                        position: "absolute",
                        top: "5.4rem",
                        left: 0,
                        opacity: userChoice ? 1 : 0,
                        transition: "opacity 3s ease-in",
                        width: "100%",
                    }}
                >
                    <span
                        style={{
                            position: "absolute",
                            width: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "visible",
                            whiteSpace: "nowrap",
                        }}
                    >
                        you picked
                    </span>
                    <span
                        style={{
                            position: "absolute",
                            width: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "visible",
                            whiteSpace: "nowrap",
                            right: "0",
                        }}
                    >
                        the house picked
                    </span>
                </Box>
                <Box
                    data-testid={CHOOSE_TESTIDS.CHOOSE_CHOICES_CONTAINER}
                    sx={{
                        // outline: "1px solid green",
                        opacity: 1,
                        transition: "all 1s ease-in",
                        height: {
                            xs: "9.7rem",
                            md: userChoice ? "19.4rem" : "14.5rem",
                        },
                        backgroundImage: userChoice
                            ? ""
                            : `url("./images/bg-triangle.svg")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                        backgroundPosition: "center",
                    }}
                >
                    {choices}
                    <Box
                        data-testid={CHOOSE_TESTIDS.CHOOSE_HOUSE_PICK_CONTAINER}
                        sx={{
                            opacity: userChoice ? 1 : 0,
                            transition: "opacity 1s ease-in",
                            height: 0,
                            width: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ...coords.houseChoice,
                        }}
                    >
                        <Box
                            data-testid={
                                CHOOSE_TESTIDS.CHOOSE_HOUSE_PICK_PLACEHOLDER
                            }
                            sx={{
                                flex: "1 0 auto",
                                borderRadius: "50%",
                                width: { xs: "7rem" },
                                height: { xs: "7rem" },
                                backgroundColor: "rgba(0,0,0,0.2)",
                            }}
                        ></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Choose;
