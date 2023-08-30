import {
    CssBaseline,
    createTheme,
    ThemeProvider,
    Container,
    Box,
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
            primary: "white",
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
                        height: "100vh",
                        padding: "2rem",
                    }}
                >
                    <ScoreTab />
                    <Box sx={{ marginTop: "10.5rem" }}>
                        <Choose />
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
