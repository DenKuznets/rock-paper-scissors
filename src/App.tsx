import { Box, Button } from "@mui/material";
import { ScoreTab } from "./components";
import { gradients } from "./ts/colors";
import Choose from "./components/Choose/Choose";

function App() {
    return (
        <div className="App">
            <Box
                sx={{
                    backgroundImage: gradients.backgroundGradient,
                    height: "100vh",
                    minHeight: { xs: "740px", md: "600px" },
                    padding: { xs: "2rem", md: "3rem" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <ScoreTab />
                <Box sx={{ marginTop: { xs: "10.5rem", md: "9.5rem" } }}>
                    <Choose />
                </Box>
                <Button
                    sx={{
                        marginTop: "13rem",
                        marginRight: { md: "2rem" },
                        marginBottom: { md: "2rem" },
                        position: { md: "absolute" },
                        right: { md: "0" },
                        bottom: { md: "0" },
                    }}
                    variant="outlined"
                    onClick={() => {
                        console.log("rules btn click");
                    }}
                >
                    RULES
                </Button>
            </Box>
        </div>
    );
}

export default App;
