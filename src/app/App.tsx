import { Box, Button } from "@mui/material";
import { gradients } from "../ts/colors";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
    selectHouseChoice,
    selectUserChoice,
    setHouseChoice,
} from "./appSlice";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import ChoiceList from "../components/ChoiceList/ChoiceList";
import Rules from "../components/Rules/Rules";
import UserPick from "../components/UserPick/UserPick";
import { Roles } from "../ts/roles";
import HousePick from "../components/HousePick/HousePick";
import { RESULT_OPTIONS, determineWinner } from "../ts/utils";

export const APP_TESTIDS = {
    APP_CONTAINER: "app-container",
    APP_CHOICE_CONTAINER: "app-choice-container",
    APP_MODAL: "app-modal",
    APP_RESULT: "app-result",
    APP_SHOW_RULES_BUTTON: "app-show-rules-button",
    APP_PLAY_AGAIN_BUTTON: "app-play-again-button",
};

export const getRandomIndex = () =>
    Math.floor(Math.random() * Object.keys(Roles).length);

function App() {
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const userChoice = useAppSelector(selectUserChoice);
    const houseChoice = useAppSelector(selectHouseChoice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let houseChoiceTimeout: NodeJS.Timeout;

        if (userChoice) {
            // rolling the house pick
            const randomIndex = getRandomIndex();
            houseChoiceTimeout = setTimeout(() => {
                // only set houseChoice if no houseChoice is present
                houseChoice === null &&
                    dispatch(setHouseChoice(Object.values(Roles)[randomIndex]));
            }, 1);
        }
        return () => {
            clearTimeout(houseChoiceTimeout);
        };
    }, [userChoice]);

    useEffect(() => {
        let resultTimeout: NodeJS.Timeout;
        // calculate result only if there is no result at the moment
        if (!result && houseChoice && userChoice) {
            resultTimeout = setTimeout(() => {
                setResult(determineWinner(userChoice, houseChoice));
            }, 1);
        }
        return () => {
            clearTimeout(resultTimeout);
        };
    }, [houseChoice]);

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
            {!userChoice && (
                <ChoiceList
                    sx={{
                        marginTop: {
                            xs: "6.7rem",
                            md: "4.2rem",
                        },
                    }}
                />
            )}
            {userChoice && (
                <Box
                    data-testid={APP_TESTIDS.APP_CHOICE_CONTAINER}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        mt: { xs: "6.3rem", md: "4.1rem" },
                        minWidth: { xs375: "21rem" },
                        maxWidth: {
                            xs: "24rem",
                            md: result ? "60rem" : "46rem",
                        },
                        position: "relative",
                    }}
                >
                    <UserPick />
                    {result && (
                        <Box
                            data-testid={APP_TESTIDS.APP_RESULT}
                            sx={{
                                fontSize: { xs: "3.6rem" },
                                marginTop: { xs: "14.5rem" },
                                position: { xs: "absolute", md: "relative" },
                                width: { xs: "100%" },
                                textAlign: "center",
                                // margin: { xs: "14.5rem auto" },
                            }}
                        >
                            {result !== RESULT_OPTIONS.DRAW && "you "}
                            {result}
                        </Box>
                    )}
                    {houseChoice && <HousePick />}
                </Box>
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
