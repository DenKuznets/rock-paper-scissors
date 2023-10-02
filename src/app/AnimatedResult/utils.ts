import {
    AnyAction,
    CombinedState,
    Dispatch,
    ThunkDispatch,
} from "@reduxjs/toolkit";
import { appState, decrementScore, incrementScore } from "../appSlice";
import { RESULT_OPTIONS } from "../../components/Result/Result";

export const setScore = (
    resultState: string | null,
    dispatch: ThunkDispatch<
        CombinedState<{
            app: appState;
        }>,
        undefined,
        AnyAction
    > &
        Dispatch<AnyAction>
) => {
    switch (resultState) {
        case RESULT_OPTIONS.WIN:
            dispatch(incrementScore());
            break;
        case RESULT_OPTIONS.LOSE:
            dispatch(decrementScore());
            break;
        default:
            break;
    }
};
