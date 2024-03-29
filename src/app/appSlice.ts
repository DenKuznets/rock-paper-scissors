import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface appState {
    userChoice: string | null;
    houseChoice: string | null;
    score: number;
    result: string | null;
}

export const initialState: appState = {
    userChoice: null,
    houseChoice: null,
    score: 0,
    result: null,
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
        playAgain: (state) => {
            state.userChoice = null;
            state.houseChoice = null;
            state.result = null;
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
    playAgain,
} = appSlice.actions;

// прописываем селектор здесь, что бы не пришлось каждый раз в компонентах писать const userChoice = useSelector((state: RootState) => state.choice.userChoice);
export const selectUserChoice = (state: RootState) => state.app.userChoice;
export const selectHouseChoice = (state: RootState) => state.app.houseChoice;
export const selectResult = (state: RootState) => state.app.result;
export const selectScore = (state: RootState) => state.app.score;

export default appSlice.reducer;
