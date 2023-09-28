import { useEffect, useRef, useState } from "react";
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
    const [step, setStep] = useState(steps.one);
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    useEffect(() => {
        const stepElement = stepRef.current;
        // choiceList smooth fade out
        if (step === steps.one && userChoiceState && stepElement) {
            stepElement.style.opacity = "0";
        }

        return () => {
            // cleanup for strict mode
            if (step === steps.one && !userChoiceState && stepElement)
                stepElement.style.opacity = "1";
        };
    }, [userChoiceState, step]);

    return (
        <div data-testid={MAIN_TESTIDS.MAIN_CONTAINER}>
            {showStep1 && <Step stepRef={stepRef} step={steps.one} />}
            {showStep2 && <Step stepRef={stepRef} step={steps.two} />}
            {showStep3 && <Step stepRef={stepRef} step={steps.three} />}
        </div>
    );
};

export default Steps;
