import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface appState {
    userChoice: string | null;
    houseChoice: string | null;
    score: number;
    result: string | null;
    showStep1: boolean;
    showStep2: boolean;
    showStep3: boolean;
}

export const initialState: appState = {
    userChoice: null,
    houseChoice: null,
    score: 0,
    result: null,
    showStep1: true,
    showStep2: false,
    showStep3: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUserChoice: (state, action: PayloadAction<string | null>) => {
            state.userChoice = action.payload;
        },
        setHouseChoice: (state, action: PayloadAction<string | null>) => {
            state.houseChoice = action.payload;
        },
        setResult: (state, action: PayloadAction<string | null>) => {
            state.result = action.payload;
        },
        incrementScore: (state) => {
            state.score++;
        },
        decrementScore: (state) => {
            state.score--;
        },
        setShowStep1: (state, action: PayloadAction<boolean>) => {
            state.showStep1 = action.payload;
        },
        setShowStep2: (state, action: PayloadAction<boolean>) => {
            state.showStep2 = action.payload;
        },
        setShowStep3: (state, action: PayloadAction<boolean>) => {
            state.showStep3 = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUserChoice,
    setHouseChoice,
    setResult,
    incrementScore,
    decrementScore,
    setShowStep1,
    setShowStep2,
    setShowStep3,
} = appSlice.actions;

// прописываем селектор здесь, что бы не пришлось каждый раз в компонентах писать const userChoice = useSelector((state: RootState) => state.choice.userChoice);
export const selectUserChoice = (state: RootState) => state.app.userChoice;
export const selectHouseChoice = (state: RootState) => state.app.houseChoice;
export const selectResult = (state: RootState) => state.app.result;
export const selectShowStep1 = (state: RootState) => state.app.showStep1;
export const selectShowStep2 = (state: RootState) => state.app.showStep2;
export const selectShowStep3 = (state: RootState) => state.app.showStep3;

export default appSlice.reducer;
