import { Box } from "@mui/material";

export const CHOICE_TESTIDS = {
    CHOICE_CONTAINER: "choice-container",
    CHOICE_IMAGE: "choice-image",
};

export const CHOICE_ROLES = {
    CHOICE_ROCK: "CHOICE_ROCK",
    CHOICE_PAPER: "CHOICE_PAPER",
    CHOICE_SCISSORS: "CHOICE_SCISSORS",
};

const Choice = ({ role }: { role: string }) => {
    let gradient;
    let shadowColor;
    let icon = "./images/";
    switch (role) {
        case CHOICE_ROLES.CHOICE_PAPER:
            gradient =
                "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            shadowColor =
                "hsl(229.65517241379308, 47.933884297520656%, 47.45098039215686%)";
            icon += "icon-paper.svg";
            break;
        case CHOICE_ROLES.CHOICE_ROCK:
            gradient =
                "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            shadowColor =
                "hsl(348.94736842105266, 56.43564356435643%, 39.6078431372549%)";
            icon += "icon-rock.svg";
            break;
        case CHOICE_ROLES.CHOICE_SCISSORS:
            gradient = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            shadowColor =
                "hsl(40.12269938650307, 90.05524861878453%, 35.490196078431374%)";
            icon += "icon-scissors.svg";
            break;
        default:
            gradient = "white";
            break;
    }

    return (
        <Box
            data-testid={CHOICE_TESTIDS.CHOICE_CONTAINER}
            data-role={role}
            sx={{
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
    );
};

export default Choice;
