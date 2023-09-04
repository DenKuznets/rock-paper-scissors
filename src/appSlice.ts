import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    userChoice: {
        role: string;
        posX: number;
        posY: number;
    };
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
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        setUserChoice: (state, action: PayloadAction<AppState>) =>
            action.payload,
    },
});

// Action creators are generated for each case reducer function
export const { setUserChoice } = appSlice.actions;

export default appSlice.reducer;
