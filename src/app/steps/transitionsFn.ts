import {
    AnyAction,
    CombinedState,
    Dispatch,
    ThunkDispatch,
} from "@reduxjs/toolkit";
import { appState, setShowStep1, setShowStep2, setShowStep3 } from "../appSlice";
import { STEP_TESTIDS, steps } from "./Step/Step";
import { TransitionEvent } from "react";

const step1Transition = (
    dispatch: ThunkDispatch<
        CombinedState<{
            app: appState;
        }>,
        undefined,
        AnyAction
    > &
        Dispatch<AnyAction>,
    e: TransitionEvent<HTMLDivElement>
) => {
    if (
        e.target instanceof HTMLDivElement &&
        e.target.getAttribute("data-testid") === STEP_TESTIDS.STEP_CONTAINER
    ) {
        dispatch(setShowStep1(false));
        dispatch(setShowStep2(true));
    }
};

const step2Transition = (
    dispatch: ThunkDispatch<
        CombinedState<{
            app: appState;
        }>,
        undefined,
        AnyAction
    > &
        Dispatch<AnyAction>,
    e: TransitionEvent<HTMLDivElement>
) => {
    if (
        e.target instanceof HTMLDivElement &&
        e.target.getAttribute("data-testid") === STEP_TESTIDS.STEP_CONTAINER
    ) {
        setTimeout(() => {
            dispatch(setShowStep2(false));
            dispatch(setShowStep3(true));
        }, 3500);
    }
};

export const getStepTransitionEnd = (step: steps) => {
    switch (step) {
        case steps.one:
            return step1Transition;
        case steps.two:
            return null;
        case steps.three:
            return null;
        default:
            return null;
    }
};
