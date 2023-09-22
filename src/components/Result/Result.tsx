import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectResult } from "../../app/appSlice";
import { colors } from "../../ts/theme";

export const RESULT_TESTIDS = {
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
    const result = useAppSelector(selectResult);
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
                data-testid={RESULT_TESTIDS.RESULT_TEXT}
                sx={{
                    fontSize: { xs: "3.6rem" },
                    textAlign: "center",
                }}
            >
                {result !== RESULT_OPTIONS.DRAW && "you "}
                {result}
            </Box>
            <Button
                data-testid={RESULT_TESTIDS.RESULT_PLAY_AGAIN}
                variant="contained"
                sx={{
                    color: colors.darkText,
                    ":hover": {
                        backgroundColor: "#fff",
                    },
                }}
            >
                play again
            </Button>
        </Box>
    );
};

export default Result;
