import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { Roles } from "../../ts/roles";
import {
    testChoicePosition,
    testRemoveOtherChoices,
} from "./chooseTestFunctions";
import getChoiceTestIds, { choiceTestIds } from "../Choice/choiceTestIds";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";
import userEvent from "@testing-library/user-event";

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

        for (let role in Roles) {
            const roleElement = screen.getByAltText(role);
            expect(roleElement).toBeInTheDocument();
        }
    });

    test("remove rock and paper then scissors is clicked", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);

        const scissorsTestIds = choiceTestIds(Roles.SCISSORS);

        const scissorsElem = screen.getByTestId(
            scissorsTestIds.CHOICE_CONTAINER
        );
        expect(scissorsElem).toBeInTheDocument();
        expect(
            screen.getByTestId(choiceTestIds(Roles.PAPER).CHOICE_CONTAINER)
        ).toBeInTheDocument();
        expect(
            screen.getByTestId(choiceTestIds(Roles.ROCK).CHOICE_CONTAINER)
        ).toBeInTheDocument();

        await user.click(scissorsElem);

        expect(scissorsElem).toBeInTheDocument();
        expect(
            screen.queryByTestId(choiceTestIds(Roles.PAPER).CHOICE_CONTAINER)
        ).not.toBeInTheDocument();
        expect(
            screen.queryByTestId(choiceTestIds(Roles.ROCK).CHOICE_CONTAINER)
        ).not.toBeInTheDocument();
    });

    test("remove rock and scissors then paper is clicked", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);

        const scissorsTestIds = choiceTestIds(Roles.PAPER);

        const scissorsElem = screen.getByTestId(
            scissorsTestIds.CHOICE_CONTAINER
        );
        expect(scissorsElem).toBeInTheDocument();
        expect(
            screen.getByTestId(choiceTestIds(Roles.SCISSORS).CHOICE_CONTAINER)
        ).toBeInTheDocument();
        expect(
            screen.getByTestId(choiceTestIds(Roles.ROCK).CHOICE_CONTAINER)
        ).toBeInTheDocument();

        await user.click(scissorsElem);

        expect(scissorsElem).toBeInTheDocument();
        expect(
            screen.queryByTestId(choiceTestIds(Roles.SCISSORS).CHOICE_CONTAINER)
        ).not.toBeInTheDocument();
        expect(
            screen.queryByTestId(choiceTestIds(Roles.ROCK).CHOICE_CONTAINER)
        ).not.toBeInTheDocument();
    });

    describe("removes other choices then one choice is clicked", () => {
        for (let role in Roles) {
            testRemoveOtherChoices(role);
        }
    });
    // describe("gets choice into proper position after user clicks on it", () => {
    //     for (let role in Roles) {
    //         testChoicePosition(role);
    //     }
    // });
    //     test("shows picked text when userChoice has value", async () => {
    //         const user = userEvent.setup();
    //         renderWithProviders(<Choose />);
    //         const role = Roles.ROCK;
    //         const testids = getChoiceTestIds(role);
    //         const choice = screen.getByTestId(
    //             testids[`${role}${CHOICE_TESTID_SUFFIXES.container}`]
    //         );
    //         await user.click(choice);
    //         expect(
    //             screen.getByTestId(CHOOSE_TESTIDS.CHOOSE_PICKED_TEXT_CONTAINER)
    //         ).toBeInTheDocument();
    //         expect(screen.getByText("you picked")).toBeInTheDocument();
    //         expect(screen.getByText("the house picked")).toBeInTheDocument();
    //     });
});
