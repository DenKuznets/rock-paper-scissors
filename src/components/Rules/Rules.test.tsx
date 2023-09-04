import { render, screen } from "@testing-library/react";
import Rules, { RULES_TESTIDS } from "./Rules";
import userEvent from "@testing-library/user-event";

describe("Rules", () => {
    test("renders correctly", () => {
        render(<Rules />);
        const header = screen.getByTestId(RULES_TESTIDS.RULES_HEADER);
        const image = screen.getByTestId(RULES_TESTIDS.RULES_IMG);

        expect(header).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });
    test("has close button if onCloseButtonClick prop passed to it", () => {
        render(<Rules onCloseButtonClick={() => null} />);
        const closeBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);
        expect(closeBtn).toBeInTheDocument();
    });
    test("close button click works", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();
        render(<Rules onCloseButtonClick={handleClick} />);
        const closeBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);
        await user.click(closeBtn);
        expect(handleClick).toBeCalled();
    });
});
