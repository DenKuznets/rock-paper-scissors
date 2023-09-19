import { exact } from "prop-types";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import { CHOICE_TESTIDS } from "../Choice/Choice";
import ChoiceList, { CHOICE_LIST_TESTIDS } from "./ChoiceList";
import { Roles } from "../../ts/roles";

describe("ChoiceList", () => {
    test("renders correctly", () => {
        renderWithProviders(<ChoiceList />);

        const choiceListContainer = screen.getByTestId(
            CHOICE_LIST_TESTIDS.CHOICE_LIST_CONTAINER
        );
        const choices = screen.getAllByTestId("choice-container", {
            exact: false,
        });

        expect(choiceListContainer).toBeInTheDocument();
        expect(choices.length).toEqual(Object.keys(Roles).length);
    });
});
