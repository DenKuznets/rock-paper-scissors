import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CHOICE_ROLES } from "../components/Choice/Choice";

interface userChoiceType {
    role: string | null;
    posX: number | null;
    posY: number | null;
}

export interface AppState {
    userChoice: userChoiceType;
}

export const initialState: AppState = {
    userChoice: {
        role: null,
        posX: null,
        posY: null,
    },
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUserChoice: (state, action: PayloadAction<userChoiceType>) => {
            state.userChoice = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserChoice } = appSlice.actions;

export default appSlice.reducer;
