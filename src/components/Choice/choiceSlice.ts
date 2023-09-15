import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

// прописываем селектор здесь, что бы не пришлось каждый раз в компонентах писать const userChoice = useSelector((state: RootState) => state.choice.userChoice);
export const selectUserChoice = (state: RootState) => state.choice.userChoice;

export default choiceSlice.reducer;
