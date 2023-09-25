import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Result, { RESULT_TESTIDS } from "./Result";
import { initialState } from "../../app/appSlice";
import { Roles } from "../../ts/roles";
import { RESULT_OPTIONS } from "./Result";
import { resultTest } from "./resultTestFunctions";
import userEvent from "@testing-library/user-event";
import { gameEndState } from "../../ts/utils";

test("Renders correctly", async () => {
    renderWithProviders(<Result />, {
        preloadedState: gameEndState,
    });
    const resultContainer = screen.getByTestId(RESULT_TESTIDS.RESULT_CONTAINER);
    const playAgainButton = screen.getByTestId(
        RESULT_TESTIDS.RESULT_PLAY_AGAIN
    );
    const resultText = screen.getByTestId(RESULT_TESTIDS.RESULT_TEXT);

    expect(resultContainer).toBeInTheDocument();
    expect(resultText).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
});

describe("correctly displays result", () => {
    resultTest(Roles.PAPER, Roles.ROCK, RESULT_OPTIONS.WIN);
    resultTest(Roles.ROCK, Roles.SCISSORS, RESULT_OPTIONS.WIN);
    resultTest(Roles.SCISSORS, Roles.PAPER, RESULT_OPTIONS.WIN);
    resultTest(Roles.PAPER, Roles.SCISSORS, RESULT_OPTIONS.LOSE);
    resultTest(Roles.ROCK, Roles.PAPER, RESULT_OPTIONS.LOSE);
    resultTest(Roles.SCISSORS, Roles.ROCK, RESULT_OPTIONS.LOSE);
    resultTest(Roles.PAPER, Roles.PAPER, RESULT_OPTIONS.DRAW);
    resultTest(Roles.ROCK, Roles.ROCK, RESULT_OPTIONS.DRAW);
    resultTest(Roles.SCISSORS, Roles.SCISSORS, RESULT_OPTIONS.DRAW);
});

