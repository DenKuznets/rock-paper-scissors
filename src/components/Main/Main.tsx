import React, { useEffect, useRef, useState } from "react";
import Step1, { STEP1_TESTIDS } from "../../app/steps/Step1/Step1";
import { useAppSelector } from "../../app/reduxHooks";
import { selectUserChoice } from "../../app/appSlice";

const Main = () => {
    const step1ref = useRef<HTMLDivElement | null>(null);
    const [showStep1, setShowStep1] = useState(true);
    const [showStep2, setShowStep2] = useState(false);
    const userChoiceState = useAppSelector(selectUserChoice);
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
        <div>
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
                            setShowStep2(false);
                        }
                    }}
                />
            )}
        </div>
    );
};

export default Main;
