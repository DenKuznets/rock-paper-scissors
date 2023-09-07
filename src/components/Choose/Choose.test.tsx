import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { Roles } from "../../ts/roles";
import userEvent from "@testing-library/user-event";
import testChoicePosition from "./chooseTestFunctions";

describe("Choose", () => {
    test("renders correctly", () => {
        renderWithProviders(<Choose />);

        const chooseContainer = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONTAINER
        );
        expect(chooseContainer).toBeInTheDocument();

        for (let role in Roles) {
            const roleElement = screen.getByAltText(role);
            expect(roleElement).toBeInTheDocument();
        }
    });
    test("removes other choices then one choice is clicked", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const rockElement = screen.getByAltText(Roles.ROCK);
        const paperElement = screen.getByAltText(Roles.PAPER);
        const scissorsElement = screen.getByAltText(Roles.SCISSORS);

        await user.click(rockElement);

        expect(rockElement).toBeInTheDocument();
        expect(paperElement).not.toBeInTheDocument();
        expect(scissorsElement).not.toBeInTheDocument();
    });
    describe("gets choice into proper position after user clicks on it", () => {
        for (let role in Roles) {
            testChoicePosition(role);
        }
    });
});
