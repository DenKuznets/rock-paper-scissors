import { render, screen } from "@testing-library/react";
import Rules, { RULES_TESTIDS } from "./Rules";

describe("Rules", () => {
    test("renders correctly", () => {
        render(<Rules />);
        const header = screen.getByTestId(RULES_TESTIDS.RULES_HEADER);
        expect(header).toBeInTheDocument();
    });
});
