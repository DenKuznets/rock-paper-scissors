import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChoiceState {
    userChoice: string | null;
}

const initialState: ChoiceState = {
    userChoice: null,
};

export const choiceSlice = createSlice({
    name: "choice",
    initialState,
    reducers: {
        setUserChoice: (state, action: PayloadAction<string>) => {
            state.userChoice = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserChoice } = choiceSlice.actions;

export default choiceSlice.reducer;
