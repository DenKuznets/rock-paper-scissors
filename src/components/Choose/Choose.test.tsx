import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { Roles } from "../../ts/roles";
import {
    testChoicePosition,
    testRemoveOtherChoices,
} from "./chooseTestFunctions";

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
    describe("removes other choices then one choice is clicked", () => {
        for (let role in Roles) {
            testRemoveOtherChoices(role);
        }
    });
    describe("gets choice into proper position after user clicks on it", () => {
        for (let role in Roles) {
            testChoicePosition(role);
        }
    });
});
