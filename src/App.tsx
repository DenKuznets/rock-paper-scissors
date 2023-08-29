import {
    CssBaseline,
    createTheme,
    ThemeProvider,
    Container,
} from "@mui/material";
import { ScoreTab } from "./components";
import { gradients } from "./ts/colors";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow Semi Condensed", "sans-serif"].join(","),
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
                        padding:"2rem"
                    }}
                >
                    <ScoreTab />
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
