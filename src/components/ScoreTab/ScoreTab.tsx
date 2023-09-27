import { Box } from "@mui/material";
import { colors } from "../../ts/theme";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/reduxHooks";
import { selectShowResult } from "../../app/appSlice";

export const SCORETAB_TESTIDS = {
    SCORETAB_CONTAINER: "scoretab-container",
    SCORETAB_HEADER: "scoretab-header",
    SCORETAB_SCORE_DISPLAY: "scoretab-score-display",
    SCORETAB_SCORE_DISPLAY_LABEL: "scoretab-score-display-label",
    SCORETAB_SCORE_DISPLAY_SCORE: "scoretab-score-display-score",
};
// 3500
const ScoreTab = () => {
    const score = useSelector((state: RootState) => state.app.score);
    const [scoreToShow, setScoreToShow] = useState(score);
    const showResult = useAppSelector(selectShowResult);
    useEffect(() => {
        if (showResult) setScoreToShow(score);
    }, [showResult, score]);

    return (
        <Box
            data-testid={SCORETAB_TESTIDS.SCORETAB_CONTAINER}
            sx={{
                border: `3px solid ${colors.headerOutline}`,
                padding: {
                    xs: "0.5rem",
                    md: "0.7rem 1.3rem",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: { xs: "4px", md: "18px" },
                // minWidth: { xs: "19.5rem", md: "33rem" },
                maxWidth: { xs: "30rem", md: "44rem" },
                width: "100%",
                minHeight: { xs: "5.9rem", md: "9.4rem" },
                margin: "0 auto",
            }}
        >
            <Box
                data-testid={SCORETAB_TESTIDS.SCORETAB_HEADER}
                sx={{
                    lineHeight: "0.8",
                    fontSize: { xs: "1.3rem", md: "2.5rem" },
                    marginLeft: { xs: "0.9rem", md: "0.7rem" },
                }}
            >
                ROCK <br />
                PAPER <br />
                SCISSORS
            </Box>
            <Box
                data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY}
                sx={{
                    backgroundColor: "white",
                    padding: { xs: "0.8rem", md: "1rem" },
                    borderRadius: { xs: "4px", md: "10px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: { xs: "5rem", md: "9.5rem" },
                    minHeight: "100%",
                }}
            >
                <Box
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_LABEL}
                    color={colors.scoreText}
                    sx={{ fontSize: { xs: "0.6rem", md: "1rem" } }}
                    fontWeight="700"
                    letterSpacing="1.5px"
                >
                    SCORE
                </Box>
                <Box
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_SCORE}
                    color={colors.darkText}
                    sx={{ fontSize: { xs: "2.3rem", md: "4rem" } }}
                    lineHeight="1"
                    fontWeight="700"
                >
                    {scoreToShow}
                </Box>
            </Box>
        </Box>
    );
};

export default ScoreTab;
