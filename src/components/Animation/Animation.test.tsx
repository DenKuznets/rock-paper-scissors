import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Animation, { ANIMATION_TESTIDS } from "./Animation";

describe("Animation", () => {
    test("renders correctly", () => {
        renderWithProviders(<Animation />);
        const container = screen.getByTestId(
            ANIMATION_TESTIDS.ANIMATION_CONTAINER
        );

        expect(container).toBeInTheDocument();
    });
});
