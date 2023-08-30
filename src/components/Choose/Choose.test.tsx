import { render, screen } from "@testing-library/react";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { CHOICE_ROLES } from "../Choice/Choice";

describe("ScoreTab", () => {
    test("renders correctly", () => {
        render(<Choose />);

        const container = screen.getByTestId(CHOOSE_TESTIDS.CHOOSE_CONTAINER);
        const connectingLine = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONNECTING_LINE
        );

        const rockElement = screen.getByAltText(CHOICE_ROLES.CHOICE_ROCK);
        const paperElement = screen.getByAltText(CHOICE_ROLES.CHOICE_PAPER);
        const scissorsElement = screen.getByAltText(
            CHOICE_ROLES.CHOICE_SCISSORS
        );
        expect(container).toBeInTheDocument();
        expect(connectingLine).toBeInTheDocument();
        expect(rockElement).toBeInTheDocument();
        expect(paperElement).toBeInTheDocument();
        expect(scissorsElement).toBeInTheDocument();
    });
});
