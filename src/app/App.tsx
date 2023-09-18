import { Box, Button } from "@mui/material";
import { ScoreTab } from "../components";
import { gradients } from "../ts/colors";
import Choose from "../components/Choose/Choose";
import Rules from "../components/Rules/Rules";
import { useState } from "react";
import { useAppSelector } from "./hooks";
import { selectUserChoice } from "../components/Choose/chooseSlice";

export const APP_TESTIDS = {
    APP_CONTAINER: "app-container",
    APP_CHOOSE_CONTAINER: "app-choose-container",
    APP_MODAL: "app-modal",
};

function App() {
    const [showModal, setShowModal] = useState(false);
    const userChoice = useAppSelector(selectUserChoice);

    return (
        <Box
            data-testis={APP_TESTIDS.APP_CONTAINER}
            sx={{
                background: gradients.backgroundGradient,
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
            <Choose
                sx={{
                    marginTop: {
                        xs: "10.5rem",
                        md: "9.5rem",
                    },
                }}
            />
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
                    setShowModal(true);
                    document.body.style.overflow = "hidden";
                }}
            >
                RULES
            </Button>
            <Box
                data-testid={APP_TESTIDS.APP_MODAL}
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: showModal ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Rules
                    onCloseButtonClick={() => {
                        setShowModal(false);
                        document.body.style.overflow = "auto";
                    }}
                />
            </Box>
        </Box>
    );
}

export default App;
