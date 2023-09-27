import { Box } from "@mui/material";
import { gradients } from "../ts/theme";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import { useEffect, useState } from "react";
import Main from "./steps/Steps";
import ShowRules from "../components/ShowRules/ShowRules";
import Rules from "../components/Rules/Rules";
import { Roles } from "../ts/roles";
import { determineWinner, getRandomIndex } from "../ts/utils";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
    incrementScore,
    decrementScore,
    selectHouseChoice,
    selectResult,
    selectUserChoice,
    setHouseChoice,
    setResult,
} from "./appSlice";
import { RESULT_OPTIONS } from "../components/Result/Result";

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
    position: "relative",
};

function App() {
    const [showRules, setShowRules] = useState(false);
    const dispatch = useAppDispatch();
    const userChoiceState = useAppSelector(selectUserChoice);
    const houseChoiceState = useAppSelector(selectHouseChoice);
    const resultState = useAppSelector(selectResult);

    // disable window scroll then showing modal window
    useEffect(() => {
        document.body.style.overflow = showRules ? "hidden" : "auto";
    }, [showRules]);

    // set house choice
    useEffect(() => {
        if (userChoiceState) {
            const houseChoice = Object.values(Roles)[getRandomIndex()];
            houseChoiceState === null && dispatch(setHouseChoice(houseChoice));
        }
    }, [userChoiceState]);

    // set result
    useEffect(() => {
        if (!resultState && houseChoiceState && userChoiceState) {
            const result = determineWinner(userChoiceState, houseChoiceState);
            dispatch(setResult(result));
        }
    }, [houseChoiceState]);

    // set score
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
