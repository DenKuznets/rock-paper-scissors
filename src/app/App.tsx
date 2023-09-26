import { Box, Button } from "@mui/material";
import { gradients } from "../ts/theme";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
    decrementScore,
    incrementScore,
    selectHouseChoice,
    selectResult,
    selectUserChoice,
    setHouseChoice,
    setResult,
} from "./appSlice";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import ChoiceList, {
    CHOICE_LIST_TESTIDS,
} from "../components/ChoiceList/ChoiceList";
import Rules from "../components/Rules/Rules";
import UserPick from "../components/UserPick/UserPick";
import { Roles } from "../ts/roles";
import HousePick from "../components/HousePick/HousePick";
import { determineWinner, getRandomIndex } from "../ts/utils";
import Result, { RESULT_OPTIONS } from "../components/Result/Result";

export const APP_TESTIDS = {
    APP_CONTAINER: "app-container",
    APP_CHOICES_CONTAINER: "app-choices-container",
    APP_RULES_BUTTON: "app-rules-button",
};

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showChoiceList, setShowChoiceList] = useState(true);
    const [showUserPick, setShowUserPick] = useState(false);
    const resultState = useAppSelector(selectResult);
    const userChoice = useAppSelector(selectUserChoice);
    const houseChoice = useAppSelector(selectHouseChoice);
    const dispatch = useAppDispatch();
    const choiceListRef = useRef<HTMLDivElement | null>(null);

    // animate choice list dissapearance
    useEffect(() => {
        const choiceComponent = choiceListRef.current;
        if (choiceComponent && userChoice) choiceComponent.style.opacity = "0";

        setShowUserPick(true);
        return () => {
            if (choiceComponent && !userChoice)
                choiceComponent.style.opacity = "1";
        };
    }, [userChoice]);

    // set house choice
    useEffect(() => {
        if (userChoice) {
            // rolling the house pick
            const randomIndex = getRandomIndex();
            houseChoice === null &&
                dispatch(setHouseChoice(Object.values(Roles)[randomIndex]));
        }
    }, [userChoice]);

    // set result
    useEffect(() => {
        // let resultTimeout: NodeJS.Timeout;
        // calculate result only if there is no result at the moment
        if (!resultState && houseChoice && userChoice) {
            const result = determineWinner(userChoice, houseChoice);
            dispatch(setResult(result));
        }
    }, [houseChoice]);

    // disable window scroll then showing modal window
    useEffect(() => {
        document.body.style.overflow = showModal ? "hidden" : "auto";
    }, [showModal]);

    // setting score depending on result
    useEffect(() => {
        switch (resultState) {
            case RESULT_OPTIONS.WIN:
                dispatch(incrementScore());
                break;
            case RESULT_OPTIONS.LOSE:
                dispatch(decrementScore());
                break;
            default:
                break;
        }
    }, [resultState]);

    return (
        <Box
            data-testis={APP_TESTIDS.APP_CONTAINER}
            sx={{
                background: gradients.backgroundGradient,
                height: "100vh",
                minHeight: { xs: "740px", md: "790px" },
                padding: { xs320: "1rem", xs375: "2rem", md: "3rem" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
            }}
        >
            <ScoreTab />
            {showChoiceList && (
                <ChoiceList
                    // fadeout ChoiceList from the screen
                    // when opacity animation goes to 0, remove ChoiceList from the document
                    handleTransitionEnd={(e) => {
                        if (
                            e.target instanceof HTMLDivElement &&
                            e.target.getAttribute("data-testid") ===
                                CHOICE_LIST_TESTIDS.CHOICE_LIST_CONTAINER
                        ) {
                            setShowChoiceList(false);
                        }
                    }}
                    choiceListRef={choiceListRef}
                    sx={{
                        opacity: "1",
                        transition: "opacity 1s",
                        marginTop: {
                            xs: "6.7rem",
                            md: "4.2rem",
                        },
                    }}
                />
            )}
            {userChoice && (
                <Box
                    data-testid={APP_TESTIDS.APP_CHOICES_CONTAINER}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        mt: { xs: "6.3rem", md: "4.1rem" },
                        minWidth: { xs375: "21rem" },
                        maxWidth: {
                            xs: "24rem",
                            md: "100%",
                        },
                        position: "relative",
                        gap: { md: "4rem" },
                    }}
                >
                    <UserPick
                        sx={{
                            opacity: showUserPick ? 1 : 0,
                            transition: "opacity 1s",
                        }}
                    />
                    {resultState && (
                        <Result
                            sx={{
                                marginTop: { xs: "14.5rem", md: "7.6rem" },
                            }}
                        />
                    )}
                    {houseChoice && <HousePick />}
                </Box>
            )}
            <Button
                data-testid={APP_TESTIDS.APP_RULES_BUTTON}
                sx={{
                    position: "absolute",
                    right: { md: "2rem" },
                    bottom: { xs: "3.4rem", md: "2rem" },
                }}
                variant="outlined"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                RULES
            </Button>
            {showModal && (
                <Rules
                    onCloseButtonClick={() => {
                        setShowModal(false);
                    }}
                />
            )}
        </Box>
    );
}

export default App;
