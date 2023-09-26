import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/reduxHooks";
import {
    selectResult,
    setHouseChoice,
    setResult,
    setUserChoice,
} from "../../app/appSlice";
import { colors } from "../../ts/theme";
import { SxProps, Theme } from "@mui/material/styles";

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

const Result = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    const dispatch = useAppDispatch();
    const result = useAppSelector(selectResult);
    return (
        <Box
            data-testid={RESULT_TESTIDS.RESULT_CONTAINER}
            sx={{
                position: {
                    xs: "absolute",
                    md: "relative",
                },
                width: { xs: "100%", md: "unset" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
                ...sx,
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
                    padding: "0.67rem 3.9rem",
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    ":hover": {
                        backgroundColor: "#fff",
                        color: "red",
                    },
                    backgroundColor: "#fff",
                }}
                onClick={() => {
                    dispatch(setUserChoice(null));
                    dispatch(setHouseChoice(null));
                    dispatch(setResult(null));
                }}
            >
                play again
            </Button>
        </Box>
    );
};

export default Result;
