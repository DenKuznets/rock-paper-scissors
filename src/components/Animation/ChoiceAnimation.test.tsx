import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import ChoiceAnimation, { ANIMATION_TESTIDS } from "./ChoiceAnimation";

describe("Animation", () => {
    test("renders correctly", () => {
        renderWithProviders(<ChoiceAnimation />);
        const container = screen.getByTestId(
            ANIMATION_TESTIDS.ANIMATION_CONTAINER
        );

        expect(container).toBeInTheDocument();
    });
});
