import { Box } from "@mui/material";

export const CHOICE_TESTIDS = {
    CHOICE_CONTAINER: "choice-container",
    CHOICE_IMAGE: "choice-image",
};

export const CHOICE_ROLES = {
    CHOICE_ROCK: "choice-rock",
    CHOICE_PAPER: "choice-paper",
    CHOICE_SCISSORS: "choice-scissors",
};

const Choice = ({ role }: { role: string }) => {
    let gradient;
    let shadowColor;
    switch (role) {
        case CHOICE_ROLES.CHOICE_PAPER:
            gradient =
                "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            shadowColor = "hsl(230, 47%, 40%)";
            break;
        case CHOICE_ROLES.CHOICE_ROCK:
            gradient =
                "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            shadowColor = "hsl(349, 55%, 29%)";
            break;
        case CHOICE_ROLES.CHOICE_SCISSORS:
            gradient = "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            shadowColor = "hsl(40, 73%, 34%)";
            break;
        default:
            gradient = "white";
            break;
    }

    return (
        <Box
            sx={{
                height: 0,
                width: 0,
            }}
            data-testid={CHOICE_TESTIDS.CHOICE_CONTAINER}
        >
            <Box
                sx={{
                    background: gradient,
                    height: "8rem",
                    width: "8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: `0 5px 1px 0px ${shadowColor}`,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "6rem",
                        width: "6rem",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        boxShadow: "inset 0px 5px 2px rgba(0,0,0,0.2)",
                    }}
                >
                    <img
                        data-testid={CHOICE_TESTIDS.CHOICE_IMAGE}
                        src={`./images/${role}.svg`}
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
