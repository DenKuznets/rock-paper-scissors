import { render, screen } from "@testing-library/react";
import App from "./App";
import { SCORETAB_TESTIDS } from "./components/ScoreTab/ScoreTab";
import { CHOOSE_TESTIDS } from "./components/Choose/Choose";

describe("App", () => {
    test("renders correctly", () => {
        render(<App />);
        const ScoreTabElement = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_CONTAINER
        );
        expect(ScoreTabElement).toBeInTheDocument();
        const ChooseElement = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONTAINER
        );
        expect(ChooseElement).toBeInTheDocument();
    });
});
