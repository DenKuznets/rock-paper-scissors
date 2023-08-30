import { Box } from "@mui/material";
import { colors } from "../../ts/colors";

export const SCORETAB_TESTIDS = {
    SCORETAB_CONTAINER: "scoretab-container",
    SCORETAB_HEADER: "scoretab-header",
    SCORETAB_SCORE_DISPLAY: "scoretab-score-display",
    SCORETAB_SCORE_DISPLAY_LABEL: "scoretab-score-display-label",
    SCORETAB_SCORE_DISPLAY_SCORE: "scoretab-score-display-score",
};

const ScoreTab = () => {
    return (
        <Box
            sx={{
                outline: `3px solid ${colors.headerOutline}`,
                padding: {
                    xs: "0.7rem",
                    md: "1.1rem",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: { xs: "4px", md: "18px" },
                minWidth: "19rem",
                maxWidth: "44rem",
                width: "100%",
                minHeight: { xs: "5.9rem", md: "9.2rem" },
            }}
            data-testid={SCORETAB_TESTIDS.SCORETAB_CONTAINER}
        >
            <Box
                data-testid={SCORETAB_TESTIDS.SCORETAB_HEADER}
                sx={{
                    lineHeight: "0.8",
                    fontSize: { xs: "1.3rem", md: "2.5rem" },
                    marginLeft: { xs: "0.9rem", md: "2rem" },
                }}
            >
                ROCK <br />
                PAPER <br />
                SCISSORS
            </Box>
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: { xs: "0.8rem", md: "1rem" },
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "5rem",
                    minHeight: "100%",
                }}
                data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY}
            >
                <Box
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_LABEL}
                    color={colors.scoreText}
                    fontSize="0.6rem"
                    fontWeight="700"
                    letterSpacing="1.5px"
                >
                    SCORE
                </Box>
                <Box
                    color={colors.darkText}
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_SCORE}
                    fontSize="2.3rem"
                    lineHeight="1"
                    fontWeight="700"
                >
                    12
                </Box>
            </Box>
        </Box>
    );
};

export default ScoreTab;
