import { render, screen } from "@testing-library/react";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { CHOICE_TESTIDS } from "../Choice/Choice";

describe("ScoreTab", () => {
    test("renders correctly", () => {
        render(<Choose />);

        const container = screen.getByTestId(CHOOSE_TESTIDS.CHOOSE_CONTAINER);

        // const rockElement = screen.getByTestId(CHOICE_TESTIDS.CHOICE_ROCK);
        // const paperElement = screen.getByTestId(CHOICE_TESTIDS.CHOICE_PAPER);
        // const scissorsElement = screen.getByTestId(
        //     CHOICE_TESTIDS.CHOICE_SCISSORS
        // );
        expect(container).toBeInTheDocument();
        // expect(rockElement).toBeInTheDocument();
        // expect(paperElement).toBeInTheDocument();
        // expect(scissorsElement).toBeInTheDocument();
    });
});
