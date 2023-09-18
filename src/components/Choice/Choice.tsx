import { Box } from "@mui/material";
import { Roles } from "../../ts/roles";
import coords from "../../ts/coords";
import getRoleCss from "./roleCss";
import { useSelector, useDispatch } from "react-redux";
import { setUserChoice, selectUserChoice } from "./choiceSlice";

export const chosenChoiceScale = 1.55;

export const choiceTestIds = (role: string) => {
    return {
        CHOICE_CONTAINER: `${role}_CHOICE_CONTAINER`,
        CHOICE_COLORED_BORDER: `${role}_CHOICE_COLORED_BORDER`,
        CHOICE_IMAGE: `${role}_CHOICE_IMAGE`,
        CHOICE_IMAGE_BACKGROUND: `${role}_CHOICE_IMAGE_BACKGROUND`,
    };
};

const Choice = ({ role = Roles.PAPER }) => {
    const userChoice = useSelector(selectUserChoice);
    const dispatch = useDispatch();
    const chosen = userChoice === role;
    const roleCss = getRoleCss(role);

    return (
        <Box
            data-testid={choiceTestIds(role).CHOICE_CONTAINER}
            sx={{
                position: "absolute",
                height: 0,
                width: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: chosen ? coords.userChoice.top : roleCss.initialTop,
                bottom: chosen
                    ? coords.userChoice.bottom
                    : roleCss.initialBottom,
                right: chosen ? coords.userChoice.right : roleCss.initialRight,
                left: chosen ? coords.userChoice.left : roleCss.initialLeft,
                cursor: chosen ? "default" : "pointer",
                transform: {
                    md: chosen ? `scale(${chosenChoiceScale})` : "none",
                },
                transition:
                    "top 1s, left 1s, right 1s, bottom 1s, transform 0.1s",
                ":hover": {
                    transform: {
                        md: chosen
                            ? `scale(${chosenChoiceScale})`
                            : "scale(1.05)",
                    },
                },
            }}
            onClick={() => !userChoice && dispatch(setUserChoice(role))}
        >
            <Box
                data-testid={choiceTestIds(role).CHOICE_COLORED_BORDER}
                sx={{
                    flex: "1 0 auto",
                    background: roleCss.gradient,
                    height: { xs: "8rem", md: "12rem" },
                    width: { xs: "8rem", md: "12rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: {
                        xs: `0 7px 2px 0px ${roleCss.shadowColor}`,
                        md: `0 11px 2px 0px ${roleCss.shadowColor}`,
                    },
                    filter: "drop-shadow(0px 0px 3px black)",
                    // opacity:"0.2",
                }}
            >
                <Box
                    data-testid={choiceTestIds(role).CHOICE_IMAGE_BACKGROUND}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { xs: "6rem", md: "9.5rem" },
                        width: { xs: "6rem", md: "9.5rem" },
                        borderRadius: "50%",
                        backgroundColor: "white",
                        boxShadow: {
                            xs: "inset 0px 5px 2px rgba(0,0,0,0.2)",
                            md: "inset 0px 9px 3px rgba(0,0,0,0.2)",
                        },
                    }}
                >
                    <img
                        data-testid={choiceTestIds(role).CHOICE_IMAGE}
                        src={roleCss.icon}
                        alt={role}
                        height="auto"
                        width="45%"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Choice;
