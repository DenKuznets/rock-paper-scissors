import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowStep1,
    selectShowStep2,
    selectUserChoice,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import FadeIn from "../../components/FadeIn";
import { Box } from "@mui/material";
import { useGetStepSx } from "./stepsSx";
import useGetStepChildren from "./stepsChildren";
import { useGetStepTransitionEnd } from "./transitionsFn";

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Steps = () => {
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const dispatch = useAppDispatch();
    const transitionEndFunc = useGetStepTransitionEnd();
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
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={useGetStepSx()}
                ref={stepRef}
                onTransitionEnd={(e) =>
                    transitionEndFunc && transitionEndFunc(dispatch, e)
                }
            >
                {useGetStepChildren()}
            </Box>
        </FadeIn>
    );
};

export default Steps;
