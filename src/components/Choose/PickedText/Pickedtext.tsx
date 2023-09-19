import { Box } from "@mui/material";
// import { CHOOSE_TESTIDS } from "../Choose";

const PickedText = () => {
    return (
        <Box
            // data-testid={CHOOSE_TESTIDS.CHOOSE_PICKED_TEXT_CONTAINER}
            sx={{
                // outline: "1px solid yellow",
                fontSize: { xs: "0.93rem", md: "1.6rem" },
                letterSpacing: "2px",
                position: "absolute",
                top: "5.4rem",
                left: 0,
                opacity: 1,
                transition: "opacity 3s ease-in",
                width: "100%",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    width: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                }}
            >
                you picked
            </span>
            <span
                style={{
                    position: "absolute",
                    width: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                    right: "0",
                }}
            >
                the house picked
            </span>
        </Box>
    );
};

export default PickedText;
