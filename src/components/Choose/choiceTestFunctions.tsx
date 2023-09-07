import userEvent from "@testing-library/user-event";
import Choose from "./Choose";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import getChoiceTestIds from "../Choice/choiceTestIds";
import coords from "../../ts/coords";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";

const testChoicePosition = async (role: string) => {
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

export default testChoicePosition;
