import userEvent from "@testing-library/user-event";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import { choiceTestIds } from "../Choice/Choice";
import coords from "../../ts/coords";
import { Roles } from "../../ts/roles";

export const testChoicePosition = async (role: string) => {
    return test(`${role}, ${role} gets into userChoice coords position`, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const container = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
        );

        await user.click(container);

        expect(container).toHaveStyle({
            ...coords.userChoice,
        });
    });
};

export const testRemoveOtherChoices = (role: string) => {
    return test(`${role}, removes other choices`, async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const clickedElement = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
        );
        expect(clickedElement).toBeInTheDocument();
        const allElements = screen.getAllByTestId("choice-container", {
            exact: false,
        });

        expect(allElements).toHaveLength(Object.keys(Roles).length);

        await user.click(clickedElement);

        for (let elem of allElements) {
            if (elem === clickedElement)
                expect(elem).toHaveStyle({ opacity: "1" });
            else expect(elem).toHaveStyle({ opacity: "0" });
        }
    });
};

export const testShowPickedText = (role: string) => {
    return test(`${role}, shows picked text`, async () => {
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
