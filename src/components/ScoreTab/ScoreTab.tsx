import { Container, Box, Typography } from "@mui/material";
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
                padding: "0.6rem 0.6rem 0.6rem 1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems:'center',
                borderRadius: "4px",
            }}
            data-testid={SCORETAB_TESTIDS.SCORETAB_CONTAINER}
        >
            <Typography
                data-testid={SCORETAB_TESTIDS.SCORETAB_HEADER}
                variant="h6"
                sx={{ lineHeight: "0.8" }}
                color="white"
            >
                ROCK <br />
                PAPER <br />
                SCISSORS
            </Typography>
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "0.8rem",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "5rem",
                    minHeight: "4.55rem",
                }}
                data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY}
            >
                <Typography
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_LABEL}
                    variant="body2"
                    color={colors.scoreText}
                    fontSize="0.6rem"
                    fontWeight="700"
                    letterSpacing="1.5px"
                >
                    SCORE
                </Typography>
                <Typography
                    color={colors.darkText}
                    variant="body1"
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_SCORE}
                    fontSize="2.3rem"
                    lineHeight="0.8"
                    fontWeight="700"
                >
                    0
                </Typography>
            </Box>
        </Box>
    );
};

export default ScoreTab;
