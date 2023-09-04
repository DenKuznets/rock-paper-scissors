import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface userChoiceType {
    role: string;
    posX: number;
    posY: number;
}

export interface AppState {
    userChoice: userChoiceType;
}

const initialState: AppState = {
    userChoice: {
        role: "",
        posX: 0,
        posY: 0,
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
