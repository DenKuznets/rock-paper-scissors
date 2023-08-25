import { Container, Box, Typography } from "@mui/material";

export const SCORETAB_TESTIDS = {
    SCORETAB_CONTAINER: "scoretab-container",
    SCORETAB_HEADER: "scoretab-header",
    SCORETAB_SCORE_DISPLAY: "scoretab-score-display",
    SCORETAB_SCORE_DISPLAY_LABEL: "scoretab-score-display-label",
    SCORETAB_SCORE_DISPLAY_SCORE: "scoretab-score-display-score",
};

const ScoreTab = () => {
    return (
        <Container data-testid={SCORETAB_TESTIDS.SCORETAB_CONTAINER}>
            <Typography
                data-testid={SCORETAB_TESTIDS.SCORETAB_HEADER}
                variant="h1"
            >
                ROCK <br />
                PAPER <br />
                SCISSORS
            </Typography>
            <Box data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY}>
                <Typography
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_LABEL}
                    variant="body1"
                    color="initial"
                >
                    SCORE
                </Typography>
                <span
                    data-testid={SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_SCORE}
                >
                    0
                </span>
            </Box>
        </Container>
    );
};

export default ScoreTab;