import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    playAgain,
    selectResult,
    selectShowStep2,
    selectShowStep3,
    selectUserChoice,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import { Box } from "@mui/material";
import { useGetStepSx } from "./stepsSx";
import UserPick from "../../components/UserPick/UserPick";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { setScore } from "./stepsutils";
import { PlayAgainBtn } from "../../components/CustomButton/CustomButton";

export const STEP_TESTIDS = {
    STEPS_CONTAINER: "steps-container",
    STEPS_RESULT_PLAYAGAIN_CONTAINER: "step-result-playagain-container",
    STEPS_PLAYAGAIN_BTN: "step-playagain-btn",
};

const Steps = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    const [showResult, setShowResult] = useState(false);

    const resultState = useAppSelector(selectResult);
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    const dispatch = useAppDispatch();

    // on step2 show step element again, then play housepick animation for 3500ms and switch to step 3
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (showStep2) {
            const stepElement = stepRef.current;
            if (stepElement) {
                stepElement.style.opacity = "1";
            }
            timeout = setTimeout(() => {
                dispatch(setShowStep2(false));
                dispatch(setShowStep3(true));
            }, 3500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [showStep2]);

    // animations for steps 2 and 3
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (!showStep2 && !showStep3) setHousePickView(HOUSE_OPTIONS.stub);
        if (showStep2) {
            timeout = setTimeout(() => {
                if (showStep2) {
                    setHousePickView(HOUSE_OPTIONS.animation);
                }
                setTimeout(() => {
                    setHousePickView(HOUSE_OPTIONS.choice);
                    setTimeout(() => {
                        setShowResult(true);
                        setScore(resultState, dispatch);
                    }, 500);
                }, 2000);
            }, 1000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [showStep2, showStep3]);

    return (
        <Box
            data-testid={STEP_TESTIDS.STEPS_CONTAINER}
            sx={useGetStepSx()}
            ref={stepRef}
        >
            <FadeIn>
                <UserPick />
            </FadeIn>
            {showResult && (
                <FadeIn duration={3}>
                    <Box
                        data-testid={
                            STEP_TESTIDS.STEPS_RESULT_PLAYAGAIN_CONTAINER
                        }
                        sx={resultplayagainsx}
                    >
                        <Result />
                        <PlayAgainBtn
                            testid={STEP_TESTIDS.STEPS_PLAYAGAIN_BTN}
                            onClick={() => {
                                dispatch(playAgain());
                                setShowResult(false);
                            }}
                            text="play again"
                        />
                    </Box>
                </FadeIn>
            )}
            <FadeIn>
                <HousePick view={housePickView} />
            </FadeIn>
        </Box>
    );
};

export default Steps;

const resultplayagainsx = {
    width: { xs: "100%", md: "unset" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.2rem",
    position: {
        xs: "absolute",
    },
    left: "50%",
    translate: "-50%",
    marginTop: { xs: "14.5rem", md: "9.8rem" },
};
