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
                <Container
                    sx={{
                        background: gradients.backgroundGradient,
                        // height: "100vh",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <ScoreTab />
                    <Box sx={{ marginTop: "10.5rem" }}>
                        <Choose />
                    </Box>
                    <Button
                        sx={{
                            marginTop: "13rem",
                        }}
                        variant="outlined"
                        onClick={() => {
                            console.log('rules btn click');
                        }}
                    >
                        RULES
                    </Button>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
