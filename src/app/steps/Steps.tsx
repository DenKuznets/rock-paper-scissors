import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowResult,
    selectShowStep1,
    selectShowStep2,
    selectUserChoice,
    setShowResult,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} from "../appSlice";
import { Box } from "@mui/material";
import { useGetStepSx } from "./stepsSx";
import { StepChild } from "./stepChild";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import UserPick from "../../components/UserPick/UserPick";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Steps = () => {
    const stepRef = useRef<HTMLDivElement | null>(null);
    const userChoiceState = useAppSelector(selectUserChoice);
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const dispatch = useAppDispatch();
    const showResult = useAppSelector(selectShowResult);
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);

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

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showStep2) {
            timeout = setTimeout(() => {
                if (showStep2) {
                    setHousePickView(HOUSE_OPTIONS.animation);
                }
                setTimeout(() => {
                    setHousePickView(HOUSE_OPTIONS.choice);
                    setTimeout(() => {
                        dispatch(setShowResult(true));
                    }, 500);
                }, 2000);
            }, 1000);
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
            {showStep1 ? (
                <ChoiceList />
            ) : (
                <>
                    <UserPick />
                    {showResult && (
                        <FadeIn duration={3}>
                            <Result
                                sx={{
                                    position: {
                                        xs: "absolute",
                                    },
                                    left: "50%",
                                    translate: "-50%",
                                    marginTop: { xs: "14.5rem", md: "9.8rem" },
                                }}
                            />
                        </FadeIn>
                    )}
                    <HousePick view={housePickView} />
                </>
            )}
        </Box>
    );
};

export default Steps;
