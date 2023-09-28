import {
    AnyAction,
    CombinedState,
    Dispatch,
    ThunkDispatch,
} from "@reduxjs/toolkit";
import {
    appState,
    setShowStep1,
    setShowStep2,
} from "../appSlice";
import { TransitionEvent } from "react";
import { STEP_TESTIDS } from "./Steps";

export const step1Transition = (
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