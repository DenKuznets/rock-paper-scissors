import { Box } from "@mui/material";

const RESULT_TESTIDS = {
    RESULT_CONTAINER: "result-container",
    RESULT_TEXT: "result-text",
    RESULT_PLAY_AGAIN: "result-play-again",
};

export const RESULT_OPTIONS = {
    WIN: "win",
    LOSE: "lose",
    DRAW: "draw",
};

const Result = () => {
    return (
        <Box
            data-testid={RESULT_TESTIDS.RESULT_CONTAINER}
            sx={{
                marginTop: { xs: "14.5rem" },
                position: {
                    xs: "absolute",
                    md: "relative",
                },
                width: { xs: "100%" },
            }}
        >
            <Box
                sx={{
                    fontSize: { xs: "3.6rem" },
                    textAlign: "center",
                }}
            >
                {result !== RESULT_OPTIONS.DRAW && "you "}
                {result}
            </Box>
        </Box>
    );
};

export default Result;
