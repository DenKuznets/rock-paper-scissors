import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface appState {
    userChoice: string | null;
    houseChoice: string | null;
    score: number;
}

export const initialState: appState = {
    userChoice: null,
    houseChoice: null,
    score: 0,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUserChoice: (state, action: PayloadAction<string>) => {
            state.userChoice = action.payload;
        },
        setHouseChoice: (state, action: PayloadAction<string>) => {
            state.houseChoice = action.payload;
        },
        incrementScore: (state) => {
            state.score += 1;
        },
        decrementScore: (state) => {
            state.score -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserChoice, setHouseChoice, incrementScore, decrementScore } =
    appSlice.actions;

// прописываем селектор здесь, что бы не пришлось каждый раз в компонентах писать const userChoice = useSelector((state: RootState) => state.choice.userChoice);
export const selectUserChoice = (state: RootState) => state.app.userChoice;

export default appSlice.reducer;
