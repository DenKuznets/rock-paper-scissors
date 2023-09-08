import { Box } from "@mui/material";
import { Roles } from "../../ts/roles";
import coords from "../../ts/coords";
import getRoleCss from "./roleCss";
import getChoiceTestIds from "./choiceTestIds";

export const chosenChoiceScale = 1.55;

export const CHOICE_TESTID_SUFFIXES = {
    container: "_CHOICE_CONTAINER",
    coloredBorder: "_CHOICE_COLORED_BORDER",
    imageBackground: "_CHOICE_IMAGE_BACKGROUND",
    image: "_CHOICE_IMAGE",
};

const Choice = ({
    role = Roles.PAPER,
    onClick,
    userChoice = null,
}: {
    role?: string;
    onClick?: (role: string) => void;
    userChoice?: string | null;
}) => {
    const chosen = userChoice === role;
    const roleCss = getRoleCss(role);

    const handleClick = () => {
        if (onClick) onClick(role);
    };

    const testids = getChoiceTestIds(role);

    return (
        <Box
            data-testid={testids[`${role}${CHOICE_TESTID_SUFFIXES.container}`]}
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
            onClick={handleClick}
        >
            <Box
                data-testid={
                    testids[
                        `${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.coloredBorder}`
                    ]
                }
                data-role={role}
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
                    data-testid={
                        testids[
                            `${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.imageBackground}`
                        ]
                    }
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
                        data-testid={
                            testids[
                                `${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.image}`
                            ]
                        }
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
