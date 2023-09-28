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
import Step from "./Step/Step";

export const MAIN_TESTIDS = {
    MAIN_CONTAINER: "main-container",
};

const Steps = () => {
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    const dispatch = useAppDispatch();
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
            {showStep1 && <Step stepRef={stepRef} />}
            {showStep2 && <Step stepRef={stepRef} />}
            {showStep3 && <Step stepRef={stepRef} />}
            {/* {(showStep1 || showStep2 || showStep3) && <Step stepRef={stepRef} />} */}
            {/* <Step stepRef={stepRef} /> */}
        </div>
    );
};

export default Steps;
