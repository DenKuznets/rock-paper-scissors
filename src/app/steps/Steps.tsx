import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowStep1,
    selectShowStep2,
    selectUserChoice,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import { Box } from "@mui/material";
import { useGetStepSx } from "./stepsSx";
import { StepChild } from "./stepChild";

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Steps = () => {
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const dispatch = useAppDispatch();

    // choiceList smooth fade out
    useEffect(() => {
        const stepElement = stepRef.current;

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
            {<StepChild />}
        </Box>
    );
};

export default Steps;
