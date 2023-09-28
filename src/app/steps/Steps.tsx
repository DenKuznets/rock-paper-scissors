import { useEffect, useRef } from "react";
import { useAppSelector } from "../reduxHooks";
import {
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
    selectUserChoice,
} from "../appSlice";
import Step, { steps } from "./Step/Step";

export const MAIN_TESTIDS = {
    MAIN_CONTAINER: "main-container",
};

const Steps = () => {
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
            {showStep1 && <Step stepRef={step1ref} step={steps.one} />}
            {showStep2 && <Step step={steps.two} />}
            {showStep3 && <Step step={steps.three} />}
        </div>
    );
};

export default Steps;
