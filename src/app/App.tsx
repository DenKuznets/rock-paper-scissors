import { Box } from "@mui/material";
import { gradients } from "../ts/theme";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import ShowRules from "../components/ShowRules/ShowRules";
import Rules from "../components/Rules/Rules";

export const APP_TESTIDS = {
    APP_CONTAINER: "app-container",
    APP_CHOICES_CONTAINER: "app-choices-container",
    APP_RULES_BUTTON: "app-rules-button",
};

const appContainerSx = {
    background: gradients.backgroundGradient,
    height: "100vh",
    minHeight: { xs: "740px", md: "790px" },
    padding: { xs320: "1rem", xs375: "2rem", md: "3rem" },
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    position: "relative",
};

function App() {
    const [showRules, setShowRules] = useState(false);
    // disable window scroll then showing modal window
    useEffect(() => {
        document.body.style.overflow = showRules ? "hidden" : "auto";
    }, [showRules]);

    return (
        <Box data-testis={APP_TESTIDS.APP_CONTAINER} sx={appContainerSx}>
            <ScoreTab />
            <Main />
            <ShowRules onClick={() => setShowRules(true)} />
            {showRules && (
                <Rules onCloseButtonClick={() => setShowRules(false)} />
            )}
        </Box>
    );
}

export default App;
