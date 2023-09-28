import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
    selectUserChoice,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import FadeIn from "../../components/FadeIn";
import { Box } from "@mui/material";
import { getStepSx } from "./stepsSx";
import getStepChildren from "./stepsChildren";
import { getStepTransitionEnd } from "./transitionsFn";

export const MAIN_TESTIDS = {
    MAIN_CONTAINER: "main-container",
};

const Steps = () => {
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const dispatch = useAppDispatch();
    const step = useGetStep();
    const transitionEndFunc = getStepTransitionEnd(step);
    useEffect(() => {
        const stepElement = stepRef.current;
        // choiceList smooth fade out
        if (showStep1 && userChoiceState && stepElement) {
            stepElement.style.opacity = "0";
        }

        return () => {
            // cleanup for strict mode
            if (showStep1 && !userChoiceState && stepElement)
                stepElement.style.opacity = "1";
        };
    }, [userChoiceState, showStep1]);

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

    return (
        <div data-testid={MAIN_TESTIDS.MAIN_CONTAINER}>
            <FadeIn>
                <Box
                    data-testid={STEP_TESTIDS.STEP_CONTAINER}
                    sx={getStepSx(step)}
                    ref={stepRef}
                    onTransitionEnd={(e) =>
                        transitionEndFunc && transitionEndFunc(dispatch, e)
                    }
                >
                    {getStepChildren(step)}
                </Box>
            </FadeIn>
        </div>
    );
};

export default Steps;

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

export enum steps {
    one = 1,
    two,
    three,
}

const useGetStep = () => {
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    if (showStep2) return steps.two;
    if (showStep3) return steps.three;
    return steps.one;
};
