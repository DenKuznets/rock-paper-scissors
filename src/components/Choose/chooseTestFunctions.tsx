import userEvent from "@testing-library/user-event";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import { choiceTestIds } from "../Choice/Choice";
import coords from "../../ts/coords";
import { Roles } from "../../ts/roles";

export const testChoicePosition = async (role: string) => {
    return test(role, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const container = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
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

export const testRemoveOtherChoices = (role: string) => {
    return test(role, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const clickedElement = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
        );
        expect(clickedElement).toBeInTheDocument();
        const allElements = screen.getAllByTestId("CHOICE_CONTAINER", {
            exact: false,
        });

        expect(allElements).toHaveLength(Object.keys(Roles).length);

        await user.click(clickedElement);

        for (let elem of allElements) {
            if (elem === clickedElement) expect(elem).toBeInTheDocument();
            else expect(elem).not.toBeInTheDocument();
        }
    });
};

export const testShowPickedText = (role: string) => {
    return test(role, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const choice = screen.getByTestId(choiceTestIds(role).CHOICE_CONTAINER);
        await user.click(choice);
        expect(
            screen.getByTestId(CHOOSE_TESTIDS.CHOOSE_PICKED_TEXT_CONTAINER)
        ).toBeInTheDocument();
        expect(screen.getByText("you picked")).toBeInTheDocument();
        expect(screen.getByText("the house picked")).toBeInTheDocument();
    });
};
