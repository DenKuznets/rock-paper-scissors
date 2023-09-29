import { Box } from "@mui/material";
import { useAppSelector } from "../../app/reduxHooks";
import { selectResult } from "../../app/appSlice";
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
    const result = useAppSelector(selectResult);
    return (
        <Box
            data-testid={RESULT_TESTIDS.RESULT_CONTAINER}
            sx={{
                fontSize: { xs: "3.6rem" },
                textAlign: "center",
            }}
        >
            {result !== RESULT_OPTIONS.DRAW && "you "}
            {result}
        </Box>
    );
};

export default Result;
