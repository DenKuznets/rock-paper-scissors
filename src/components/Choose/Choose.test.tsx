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

    describe("after user click on choice", () => {
        for (let role in Roles) {
            testRemoveOtherChoices(role);
            testChoicePosition(role);
            testShowPickedText(role);
        }
    });
});
