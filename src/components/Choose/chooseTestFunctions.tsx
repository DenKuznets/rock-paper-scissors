import userEvent from "@testing-library/user-event";
import Choose from "./Choose";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import getChoiceTestIds from "../Choice/choiceTestIds";
import coords from "../../ts/coords";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";
import { Roles } from "../../ts/roles";

export const testChoicePosition = async (role: string) => {
    return test(role, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const testids = getChoiceTestIds(role);
        const container = screen.getByTestId(
            testids[`${role}${CHOICE_TESTID_SUFFIXES.container}`]
        );

        await user.click(container);

        expect(container).toHaveStyle({
            top: coords.userChoice.top,
            bottom: coords.userChoice.bottom,
            left: coords.userChoice.left,
            right: coords.userChoice.right,
        });
    });
};

export const testRemoveOtherChoices = async (role: string) =>
    test(role, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const clickedElement = screen.getByTestId(
            `${role}${CHOICE_TESTID_SUFFIXES.container}`
        );
        const allElements = screen.getAllByTestId(
            CHOICE_TESTID_SUFFIXES.container,
            {
                exact: false,
            }
        );

        expect(allElements).toHaveLength(Object.keys(Roles).length);

        await user.click(clickedElement);

        for (let elem of allElements) {
            if (elem === clickedElement) expect(elem).toBeInTheDocument();
            else expect(elem).not.toBeInTheDocument();
        }
    });
