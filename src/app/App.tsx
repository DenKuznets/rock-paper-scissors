import { Box, Button } from "@mui/material";
import { gradients } from "../ts/colors";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectUserChoice, setHouseChoice } from "./appSlice";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import ChoiceList from "../components/ChoiceList/ChoiceList";
import Rules from "../components/Rules/Rules";
import UserPick from "../components/UserPick/UserPick";
import { Roles } from "../ts/roles";
import HousePick from "../components/HousePick/HousePick";

export const APP_TESTIDS = {
    APP_CONTAINER: "app-container",
    APP_CHOICE_CONTAINER: "app-choice-container",
    APP_MODAL: "app-modal",
    APP_SHOW_RULES_BUTTON: "app-show-rules-button",
};

export const getRandomIndex = () =>
    Math.floor(Math.random() * Object.keys(Roles).length);

function App() {
    const [showModal, setShowModal] = useState(false);
    const userChoice = useAppSelector(selectUserChoice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let houseChoiceTimeout: NodeJS.Timeout;
        if (userChoice) {
            const randomIndex = getRandomIndex();
            houseChoiceTimeout = setTimeout(() => {
                dispatch(setHouseChoice(Object.values(Roles)[randomIndex]));
            }, 2000);
        }
        return () => {
            clearTimeout(houseChoiceTimeout);
        };
    }, [userChoice]);

    return (
        <Box
            data-testis={APP_TESTIDS.APP_CONTAINER}
            sx={{
                background: gradients.backgroundGradient,
                height: "100vh",
                minHeight: { xs: "740px", md: "600px" },
                padding: { xs320: "1rem", xs375: "2rem", md: "3rem" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
            }}
        >
            <ScoreTab />
            {userChoice ? (
                <Box
                    data-testid={APP_TESTIDS.APP_CHOICE_CONTAINER}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: "100%",
                        mt: { xs: "6.3rem", md: "4.1rem" },
                        minWidth: { xs375: "24rem" },
                        maxWidth: "46rem",
                    }}
                >
                    <UserPick />
                    <HousePick />
                </Box>
            ) : (
                <ChoiceList
                    sx={{
                        marginTop: {
                            xs: "6.7rem",
                            md: "4.2rem",
                        },
                    }}
                />
            )}
            <Button
                data-testid={APP_TESTIDS.APP_SHOW_RULES_BUTTON}
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
