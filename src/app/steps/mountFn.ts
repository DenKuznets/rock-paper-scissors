import {
    AnyAction,
    CombinedState,
    Dispatch,
    ThunkDispatch,
} from "@reduxjs/toolkit";
import { appState, setShowStep2, setShowStep3 } from "../appSlice";
import { steps } from "./Step/Step";

const step2mountFn = (
    dispatch: ThunkDispatch<
        CombinedState<{
            app: appState;
        }>,
        undefined,
        AnyAction
    > &
        Dispatch<AnyAction>
) => {
    setTimeout(() => {
        dispatch(setShowStep2(false));
        dispatch(setShowStep3(true));
    }, 3500);
};

export const getStepMountFn = (step: steps) => {
    switch (step) {
        case steps.one:
            return null;
        case steps.two:
            return step2mountFn;
        case steps.three:
            return null;
        default:
            return null;
    }
};
