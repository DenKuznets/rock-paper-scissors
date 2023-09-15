import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { Roles } from "../../ts/roles";
import {
    testChoicePosition,
    testRemoveOtherChoices,
    testShowPickedText,
} from "./chooseTestFunctions";

describe("Choose", () => {
    test("renders correctly", () => {
        renderWithProviders(<Choose />);

        const chooseContainer = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONTAINER
        );
        const chooseChoicesContainer = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CHOICES_CONTAINER
        );
        expect(chooseContainer).toBeInTheDocument();
        expect(chooseChoicesContainer).toBeInTheDocument();
        expect(
            screen.getAllByTestId("CHOICE_CONTAINER", { exact: false })
        ).toHaveLength(Object.keys(Roles).length);
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
    describe("shows picked text after user clicks choice", () => {
        for (let role in Roles) {
            testShowPickedText(role);
        }
    });
});
