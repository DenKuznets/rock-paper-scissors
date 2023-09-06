import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Roles from "../utils/roles";
import CoordsSet from "../utils/coordsSet";

interface Choice {
    role: string;
    coords: {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
    chosen: boolean;
}

export interface AppState {
    choices: Choice[];
}

export const initialState: AppState = {
    choices: [
        {
            role: Roles.ROCK,
            coords: CoordsSet.topLeft,
            chosen: false,
        },
        {
            role: Roles.PAPER,
            coords: CoordsSet.topRight,
            chosen: false,
        },
        {
            role: Roles.SCISSORS,
            coords: CoordsSet.bottomMiddle,
            chosen: false,
        },
    ],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUserChoice: (state, action: PayloadAction<string>) => {
            // for (let obj of state.choices) {
            //     if (obj.role === action.payload) {
            //         obj.chosen = true;
            //         obj.coords = CoordsSet.userChoice;
            //     }
            // }

            state.choices.map((obj) => {
                return obj.role === action.payload
                    ? { ...obj, chosen: true, coords: CoordsSet.userChoice }
                    : obj;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserChoice } = appSlice.actions;

export default appSlice.reducer;
