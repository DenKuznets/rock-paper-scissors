import { Box } from "@mui/material";

export const RULES_TESTIDS = {
    RULES_HEADER: "rules-header",
    RULES_CLOSE_BTN: "rules-close-btn",
    RULES_ARROW: "rules-arrow",
    RULES_BEATS: "rules-beats",
};

const Rules = () => {
    return (
        <Box>
            <Box data-testid={RULES_TESTIDS.RULES_HEADER}>RULES</Box>
        </Box>
    );
};

export default Rules;
