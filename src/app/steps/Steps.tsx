import React, { useEffect, useRef } from "react";
import Step1, { STEP1_TESTIDS } from "./Step1/Step1";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
    selectUserChoice,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

export const MAIN_TESTIDS = {
    MAIN_CONTAINER: "main-container",
};

const Steps = () => {
    const dispatch = useAppDispatch();
    const step1ref = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);

    useEffect(() => {
        const step1 = step1ref.current;
        // choiceList smooth fade out
        if (step1 && userChoiceState) {
            step1.style.opacity = "0";
        }

        return () => {
            // cleanup for strict mode
            if (step1 && !userChoiceState) step1.style.opacity = "1";
        };
    }, [userChoiceState]);

    return (
        <div data-testid={MAIN_TESTIDS.MAIN_CONTAINER}>
            {showStep1 && (
                <Step1
                    stepRef={step1ref}
                    handleTransitionEnd={(e) => {
                        if (
                            e.target instanceof HTMLDivElement &&
                            e.target.getAttribute("data-testid") ===
                                STEP1_TESTIDS.STEP1_CONTAINER
                        ) {
                            dispatch(setShowStep1(false));
                            dispatch(setShowStep2(true));
                        }
                    }}
                />
            )}
            {showStep2 && (
                <Step2
                    handleTransitionEnd={() => {
                        setTimeout(() => {
                            dispatch(setShowStep2(false));
                            dispatch(setShowStep3(true));
                        }, 3500);
                    }}
                />
            )}
            {showStep3 && <Step3 />}
        </div>
    );
};

export default Steps;
