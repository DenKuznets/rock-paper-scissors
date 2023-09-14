// import { render, screen } from "@testing-library/react";
import ScoreTab, { SCORETAB_TESTIDS } from "./ScoreTab";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";

describe("ScoreTab", () => {
    test("renders correctly", () => {
        renderWithProviders(<ScoreTab />);

        const container = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_CONTAINER
        );
        const header = screen.getByTestId(SCORETAB_TESTIDS.SCORETAB_HEADER);
        const display = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY
        );
        const displayLabel = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_LABEL
        );
        const displayScore = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_SCORE_DISPLAY_SCORE
        );

        expect(container).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(display).toBeInTheDocument();
        expect(displayLabel).toBeInTheDocument();
        expect(displayScore).toHaveTextContent("0");
    });
});
