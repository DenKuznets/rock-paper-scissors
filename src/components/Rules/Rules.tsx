import { Box, IconButton } from "@mui/material";

export const RULES_TESTIDS = {
    RULES_HEADER: "rules-header",
    RULES_CLOSE_BTN: "rules-close-btn",
    RULES_IMG: "rules-img",
};

const Rules = () => {
    return (
        <Box>
            <Box data-testid={RULES_TESTIDS.RULES_HEADER}>RULES</Box>
            <Box data-testid={RULES_TESTIDS.RULES_IMG}>
                <img src="./images/image-rules.svg" alt="rules description" />
            </Box>
            <IconButton
                data-testid={RULES_TESTIDS.RULES_CLOSE_BTN}
                aria-label=""
                onClick={() => {
                    console.log("close btn click");
                    // return;
                }}
            >
                <img src="./images/icon-close.svg" alt="close btn" />
            </IconButton>
        </Box>
    );
};

export default Rules;
