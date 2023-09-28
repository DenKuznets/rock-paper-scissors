import { useEffect, useRef } from "react";
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
import Step, { STEP_TESTIDS, steps } from "./Step/Step";

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
                <Step
                    stepRef={step1ref}
                    handleTransitionEnd={(e) => {
                        if (
                            e.target instanceof HTMLDivElement &&
                            e.target.getAttribute("data-testid") ===
                                STEP_TESTIDS.STEP_CONTAINER
                        ) {
                            dispatch(setShowStep1(false));
                            dispatch(setShowStep2(true));
                        }
                    }}
                    step={steps.one}
                />
            )}
            {showStep2 && (
                <Step
                    handleOnMount={() => {
                        setTimeout(() => {
                            dispatch(setShowStep2(false));
                            dispatch(setShowStep3(true));
                        }, 3500);
                    }}
                    step={steps.two}
                />
            )}
            {showStep3 && <Step step={steps.three} />}
        </div>
    );
};

export default Steps;
