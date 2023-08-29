import { Box } from "@mui/material";
import { choiceGradients } from "../../ts/colors";

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
                    background: choiceGradients["choice-lizard-gradient"],
                    height: "5rem",
                    width: "5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    data-testid={CHOICE_TESTIDS.CHOICE_IMAGE}
                    src={`./images/${role}.svg`}
                    alt={role}
                />
            </Box>
        </Box>
    );
};

export default Choice;
