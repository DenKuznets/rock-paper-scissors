import { Box, IconButton } from "@mui/material";
import { colors } from "../../ts/colors";

export const RULES_TESTIDS = {
    RULES_CONTAINER: "rules-container",
    RULES_HEADER: "rules-header",
    RULES_CLOSE_BTN: "rules-close-btn",
    RULES_IMG: "rules-img",
};

const Rules = ({ onCloseButtonClick }: { onCloseButtonClick?: () => void }) => {
    return (
        <Box
            data-testid={RULES_TESTIDS.RULES_CONTAINER}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
                // backgroundColor: "red",
                borderRadius: { xs: "0", md: "8px" },
                position: "relative",
                minHeight: { xs: "30rem", md: "15rem" },
                height: "100vh",
                width: "100%",
                maxWidth: { xs: "100vw", md: "30rem" },
                maxHeight: { xs: "100vh", md: "30rem" },
            }}
        >
            <Box
                data-testid={RULES_TESTIDS.RULES_HEADER}
                sx={{
                    mt: { xs: "14vh", md: "0" },
                    fontSize: { xs: "2rem" },
                    fontWeight: "700",
                    lineHeight: "1",
                    position: { xs: "static", md: "absolute" },
                    top: { md: "2rem" },
                    left: { md: "2rem" },
                }}
                color={colors.darkText}
            >
                RULES
            </Box>
            <Box
                data-testid={RULES_TESTIDS.RULES_IMG}
                sx={{
                    mt: { xs: "14vh", md: "0" },
                    position: { xs: "static", md: "absolute" },
                    bottom: { md: "2rem" },
                }}
            >
                <img src="./images/image-rules.svg" alt="rules description" />
            </Box>
            {onCloseButtonClick && (
                <IconButton
                    data-testid={RULES_TESTIDS.RULES_CLOSE_BTN}
                    sx={{
                        position: "absolute",
                        bottom: { xs: "2rem", md: "unset" },
                        top: { md: "2rem" },
                        right: { md: "2rem" },
                    }}
                    aria-label=""
                    onClick={() => {
                        onCloseButtonClick();
                    }}
                >
                    <img src="./images/icon-close.svg" alt="close btn" />
                </IconButton>
            )}
        </Box>
    );
};

export default Rules;
