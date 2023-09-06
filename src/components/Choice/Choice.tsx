import { Box } from "@mui/material";
import { Roles } from "../../ts/roles";
import { useState } from "react";

export const CHOICE_TESTIDS = {
    CHOICE_CONTAINER: "choice-container",
    CHOICE_COLORED_BORDER: "choice-colored-border",
    CHOICE_IMAGE_BACKGROUND: "choice-image-background",
    CHOICE_IMAGE: "choice-image",
};

const Choice = ({
    role = Roles.PAPER,
    onClick,
}: {
    role?: string;
    onClick?: (role: string) => void;
}) => {
    const [chosen, setChosen] = useState(false);
    let gradient;
    let shadowColor;
    let icon = "./images/";
    let initialTop;
    let initialLeft;
    let initialBottom;
    let initialRight;
    switch (role) {
        case Roles.PAPER:
            gradient =
                "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            shadowColor =
                "hsl(229.65517241379308, 47.933884297520656%, 47.45098039215686%)";
            icon += "icon-paper.svg";
            initialTop = "0";
            initialLeft = "0";
            initialBottom = "100%";
            initialRight = "100%";
            break;
        case Roles.ROCK:
            gradient =
                "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            shadowColor =
                "hsl(348.94736842105266, 56.43564356435643%, 39.6078431372549%)";
            icon += "icon-rock.svg";
            initialTop = "0";
            initialLeft = "100%";
            initialBottom = "100%";
            initialRight = "0";
            break;
        case Roles.SCISSORS:
            gradient = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            shadowColor =
                "hsl(40.12269938650307, 90.05524861878453%, 35.490196078431374%)";
            icon += "icon-scissors.svg";
            initialTop = "100%";
            initialLeft = "50%";
            initialBottom = "0";
            initialRight = "50%";
            break;
    }

    const handleClick = () => {
        if (!chosen) setChosen(true);
        if (onClick) onClick(role);
    };

    return (
        <Box
            data-testid={CHOICE_TESTIDS.CHOICE_CONTAINER}
            sx={{
                position: "absolute",
                height: 0,
                width: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: chosen ? "50%" : initialTop,
                bottom: chosen ? "50%" : initialBottom,
                right: chosen ? "100%" : initialRight,
                left: chosen ? 0 : initialLeft,
                cursor: chosen ? "default" : "pointer",
                transform: chosen ? "scale(1.15)" : "none",
                transition:
                    "top 1s, left 1s, right 1s, bottom 1s, transform 0.1s",
                ":hover": {
                    transform: chosen ? "scale(1.15)" : "scale(1.05)",
                },
            }}
            onClick={handleClick}
        >
            <Box
                data-testid={CHOICE_TESTIDS.CHOICE_COLORED_BORDER}
                data-role={role}
                sx={{
                    flex: "1 0 auto",
                    background: gradient,
                    height: { xs: "8rem", md: "12rem" },
                    width: { xs: "8rem", md: "12rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: {
                        xs: `0 7px 2px 0px ${shadowColor}`,
                        md: `0 11px 2px 0px ${shadowColor}`,
                    },
                    filter: "drop-shadow(0px 0px 3px black)",
                    // opacity:"0.2",
                }}
            >
                <Box
                    data-testid={CHOICE_TESTIDS.CHOICE_IMAGE_BACKGROUND}
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
                        data-testid={CHOICE_TESTIDS.CHOICE_IMAGE}
                        src={icon}
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
