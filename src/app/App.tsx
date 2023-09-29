import { Box } from "@mui/material";
import { gradients } from "../ts/theme";
import ScoreTab from "../components/ScoreTab/ScoreTab";
import { useEffect, useState } from "react";
import Steps from "./steps/Steps";
import { ShowRulesBtn } from "../components/CustomButton/CustomButton";
import Rules from "../components/Rules/Rules";
import { Roles } from "../ts/roles";
import { determineWinner, getRandomIndex } from "../ts/utils";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
    selectHouseChoice,
    selectResult,
    selectUserChoice,
    setHouseChoice,
    setResult,
} from "./appSlice";
import ChoiceList from "../components/ChoiceList/ChoiceList";

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

    // set house choice and result
    useEffect(() => {
        if (userChoiceState) {
            const houseChoice = Object.values(Roles)[getRandomIndex()];
            houseChoiceState === null && dispatch(setHouseChoice(houseChoice));
        }
        if (!resultState && houseChoiceState && userChoiceState) {
            const result = determineWinner(userChoiceState, houseChoiceState);
            dispatch(setResult(result));
        }
    }, [userChoiceState, houseChoiceState, resultState, dispatch]);

    return (
        <Box data-testid={APP_TESTIDS.APP_CONTAINER} sx={appContainerSx}>
            <ScoreTab />
            {userChoiceState ? <Steps /> : <ChoiceList />}
            <ShowRulesBtn
                testid={APP_TESTIDS.APP_RULES_BUTTON}
                onClick={() => setShowRules(true)}
                text="rules"
            />
            {showRules && (
                <Rules onCloseButtonClick={() => setShowRules(false)} />
            )}
        </Box>
    );
}

export default App;
