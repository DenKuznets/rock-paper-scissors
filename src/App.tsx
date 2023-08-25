import { createTheme } from "@mui/material";
import "./App.css";
import { ScoreTab } from "./components";

// const theme = createTheme({
//     palette: {
//         primary: {
//             mainGradient:"radial"
//         }
//     }
// });

function App() {
    return (
        <div className="App">
            <ScoreTab />
        </div>
    );
}

export default App;
