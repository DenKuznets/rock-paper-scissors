import React, { useEffect, useRef, useState } from "react";
import Step1, { STEP1_TESTIDS } from "./Step1/Step1";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectUserChoice,
    setHouseChoice,
    setResult,
    setUserChoice,
} from "../appSlice";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

export const MAIN_TESTIDS = {
    MAIN_CONTAINER: "main-container",
};

const Steps = () => {
    const dispatch = useAppDispatch();
    const step1ref = useRef<HTMLDivElement | null>(null);
    const [showStep1, setShowStep1] = useState(true);
    const [showStep2, setShowStep2] = useState(false);
    const [showStep3, setShowStep3] = useState(false);
    const userChoiceState = useAppSelector(selectUserChoice);

    const playAgain = () => {
        dispatch(setUserChoice(null));
        dispatch(setHouseChoice(null));
        dispatch(setResult(null));
        setShowStep1(true);
        setShowStep2(false);
        setShowStep3(false);
    };

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
                            setShowStep1(false);
                            setShowStep2(true);
                        }
                    }}
                />
            )}
            {showStep2 && (
                <Step2
                    handleTransitionEnd={() => {
                        setShowStep2(false);
                        setShowStep3(true);
                    }}
                />
            )}
            {showStep3 && <Step3 playAgain={playAgain} />}
        </div>
    );
};

export default Steps;
