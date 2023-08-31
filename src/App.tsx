import {
    CssBaseline,
    createTheme,
    ThemeProvider,
    Container,
    Box,
    Button,
} from "@mui/material";
import { ScoreTab } from "./components";
import { gradients } from "./ts/colors";
import Choose from "./components/Choose/Choose";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow Semi Condensed", "sans-serif"].join(","),
    },
    palette: {
        text: {
            primary: "#fff",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // overflow: "hidden",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    border: "1px solid #fff",
                    minWidth: "8rem",
                    borderRadius: "8px",
                    letterSpacing: "2px",
                    ":hover": {
                        color: "#1976d2",
                    },
                },
            },
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
            </ThemeProvider>
        </div>
    );
}

export default App;
