import { Roles } from "./roles";

export const RESULT_OPTIONS = {
    WIN: "win",
    LOSE: "lose",
    DRAW: "draw",
};

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
