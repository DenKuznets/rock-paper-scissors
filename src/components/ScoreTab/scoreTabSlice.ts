import { createSlice } from "@reduxjs/toolkit";

export interface scoreTabState {
    score: number;
}

const initialState: scoreTabState = {
    score: 0,
};

export const scoreTabSlice = createSlice({
    name: "scoretab",
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.score += 1;
        },
        decrement: (state) => {
            state.score -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = scoreTabSlice.actions;

export default scoreTabSlice.reducer;
