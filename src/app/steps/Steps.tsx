import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectResult,
    selectShowStep1,
    selectShowStep2,
    selectUserChoice,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import { Box } from "@mui/material";
import { useGetStepSx } from "./stepsSx";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import UserPick from "../../components/UserPick/UserPick";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { setScore } from "./stepsutils";

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Steps = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    const [showResult, setShowResult] = useState(false);

    const resultState = useAppSelector(selectResult);
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const dispatch = useAppDispatch();
    // const showResult = useAppSelector(selectShowResult);

    // choiceList smooth fade out
    useEffect(() => {
        const stepElement = stepRef.current;
        // если userChoice null, значит начата новая игра и нужно скрыть результат
        if (!userChoiceState) {
            setShowResult(false);
        }

        if (showStep1 && userChoiceState && stepElement) {
            stepElement.style.opacity = "0";
        }

        return () => {
            // cleanup for strict mode
            if (showStep1 && !userChoiceState && stepElement)
                stepElement.style.opacity = "1";
        };
    }, [userChoiceState, showStep1]);

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
    }, [showStep2]);

    return (
        <Box
            data-testid={STEP_TESTIDS.STEP_CONTAINER}
            sx={useGetStepSx()}
            ref={stepRef}
            onTransitionEnd={(e) => {
                if (
                    showStep1 &&
                    e.target instanceof HTMLDivElement &&
                    e.target.getAttribute("data-testid") ===
                        STEP_TESTIDS.STEP_CONTAINER
                ) {
                    dispatch(setShowStep1(false));
                    dispatch(setShowStep2(true));
                }
            }}
        >
            {showStep1 ? (
                <ChoiceList />
            ) : (
                <>
                    <UserPick />
                    {showResult && (
                        <FadeIn duration={3}>
                            <Result />
                        </FadeIn>
                    )}
                    <HousePick view={housePickView} />
                </>
            )}
        </Box>
    );
};

export default Steps;
