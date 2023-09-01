import { render, screen } from "@testing-library/react";
import Rules, { RULES_TESTIDS } from "./Rules";

describe("Rules", () => {
    test("renders correctly", () => {
        render(<Rules />);
        const header = screen.getByTestId(RULES_TESTIDS.RULES_HEADER);
        const image = screen.getByTestId(RULES_TESTIDS.RULES_IMG);
        const closeBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);

        expect(header).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(closeBtn).toBeInTheDocument();
    });
});
