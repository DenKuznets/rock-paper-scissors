import React, { useEffect, useRef, useState } from "react";
import Step1, { STEP_TESTIDS } from "./Step1/Step1";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowResult,
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
    selectUserChoice,
    setShowResult,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import UserPick from "../../components/UserPick/UserPick";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import { Step } from "@mui/material";

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
                    sx={{
                        mt: { xs: "6.5rem", md: "4rem" },
                        opacity: "1",
                        transition: "opacity 1s",
                    }}
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
                >
                    <ChoiceList />
                </Step1>
            )}
            {showStep2 && (
                <Step2
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        mt: { xs: "6.3rem", md: "4.1rem" },
                        ml: "auto",
                        mr: "auto",
                        maxWidth: {
                            xs: "24rem",
                            md: "41rem",
                        },
                        position: "relative",
                    }}
                    handleOnMount={() => {
                        setTimeout(() => {
                            dispatch(setShowStep2(false));
                            dispatch(setShowStep3(true));
                        }, 3500);
                    }}
                >
                    {<Step2Child />}
                </Step2>
            )}
            {showStep3 && (
                <Step3
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        mt: { xs: "6.3rem", md: "4.1rem" },
                        ml: "auto",
                        mr: "auto",
                        maxWidth: {
                            xs: "24rem",
                        },
                        position: "relative",
                        animationName: "width-change",
                        animationDuration: "1s",
                        animationFillMode: "forwards",
                        "@keyframes width-change": {
                            md: {
                                "0%": {
                                    maxWidth: "41rem",
                                },
                                "100%": {
                                    maxWidth: "60rem",
                                },
                            },
                        },
                    }}
                >
                    {<Step3Child />}
                </Step3>
            )}
        </div>
    );
};

export default Steps;

const Step2Child = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHousePickView(HOUSE_OPTIONS.animation);
            setTimeout(() => {
                setHousePickView(HOUSE_OPTIONS.choice);
            }, 2000);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <>
            <UserPick />
            <HousePick view={housePickView} />
        </>
    );
};

const Step3Child = () => {
    const showResult = useAppSelector(selectShowResult);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setShowResult(true));
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <UserPick />
            {showResult && (
                <FadeIn duration={3}>
                    <Result
                        sx={{
                            position: {
                                xs: "absolute",
                                // md: "relative",
                            },
                            left: "50%",
                            translate: "-50%",
                            marginTop: { xs: "14.5rem", md: "9.8rem" },
                        }}
                    />
                </FadeIn>
            )}
            <HousePick view={HOUSE_OPTIONS.choice} />
        </>
    );
};
