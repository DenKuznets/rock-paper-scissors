import { RESULT_OPTIONS } from "../components/Result/Result";
import { Roles } from "./roles";
import { initialState } from "../app/appSlice";

export const determineWinner = (
    userChoice: string,
    houseChoice: string
): string => {
    if (userChoice === houseChoice) {
        return RESULT_OPTIONS.DRAW;
    }
    switch (userChoice) {
        case Roles.ROCK:
            if (houseChoice === Roles.PAPER) {
                return RESULT_OPTIONS.LOSE;
            } else if (houseChoice === Roles.SCISSORS) {
                return RESULT_OPTIONS.WIN;
            }
            break;
        case Roles.SCISSORS:
            if (houseChoice === Roles.ROCK) {
                return RESULT_OPTIONS.LOSE;
            } else if (houseChoice === Roles.PAPER) {
                return RESULT_OPTIONS.WIN;
            }
            break;
        case Roles.PAPER:
            if (houseChoice === Roles.SCISSORS) {
                return RESULT_OPTIONS.LOSE;
            } else if (houseChoice === Roles.ROCK) {
                return RESULT_OPTIONS.WIN;
            }
            break;
    }
    return "UNKNOWN ROLES";
};

export const gameEndState = {
    app: {
        ...initialState,
        userChoice: Roles.PAPER,
        houseChoice: Roles.ROCK,
        result: RESULT_OPTIONS.WIN,
    },
};
