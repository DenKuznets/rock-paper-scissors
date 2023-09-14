import { Box } from "@mui/material";
import Choice from "../Choice/Choice";
import { Roles } from "../../ts/roles";
import { useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
    CHOOSE_CHOICES_CONTAINER: "choose-choices-container",
    CHOOSE_PICKED_TEXT_CONTAINER: "choose-picked-text-container",
};

const Choose = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const sockets = Object.keys(Roles)
        .filter((role) => {
            return userChoice ? role === userChoice : role;
        })
        .map((role) => {
            return (
                <Choice
                    onClick={(choiceRole) => setUserChoice(choiceRole)}
                    key={role}
                    role={role}
                    userChoice={userChoice}
                />
            );
        });

    return (
        <Box
            data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}
            sx={{
                ...sx,
                outline: "1px solid red",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    maxWidth: {
                        xs: "11.1rem",
                        md: userChoice ? "23.8rem" : "17.5rem",
                    },
                    margin: "0 auto",
                }}
            >
                <Box
                    data-testid={CHOOSE_TESTIDS.CHOOSE_CHOICES_CONTAINER}
                    sx={{
                        outline: "1px solid green",
                        opacity: 1,
                        transition: "all 1s ease-in",
                        // backgroundColor: "white",

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
                    {sockets}
                </Box>
                {userChoice && (
                    <Box
                        data-testid={
                            CHOOSE_TESTIDS.CHOOSE_PICKED_TEXT_CONTAINER
                        }
                        sx={{
                            outline: "1px solid yellow",
                            fontSize: { xs: "1rem" },
                            letterSpacing: "2px",
                            mt: { xs: "1rem", md: "0" },
                            position: "relative",
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
                )}
            </Box>
        </Box>
    );
};

export default Choose;
