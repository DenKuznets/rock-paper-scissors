import { screen } from "@testing-library/react";
import App from "./App";
import { SCORETAB_TESTIDS } from "../components/ScoreTab/ScoreTab";
import { RULES_TESTIDS } from "../components/Rules/Rules";
import { APP_TESTIDS } from "./App";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../ts/utils-for-tests";
import { CHOICE_TESTIDS } from "../components/Choice/Choice";
import { Roles } from "../ts/roles";
import { USER_PICK_TESTIDS } from "../components/UserPick/UserPick";

describe("App", () => {
    test("renders correctly", () => {
        renderWithProviders(<App />);

        const ScoreTabElement = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_CONTAINER
        );

        const rulesButton = screen.getByRole("button", { name: /rules/i });
        const rulesContainer = screen.getByTestId(
            RULES_TESTIDS.RULES_CONTAINER
        );
        const appModal = screen.getByTestId(APP_TESTIDS.APP_MODAL);

        expect(ScoreTabElement).toBeInTheDocument();
        expect(rulesButton).toBeInTheDocument();
        expect(rulesContainer).toBeInTheDocument();
        expect(appModal).toHaveStyle(`
        display:none
        `);
    });

    test("rules button click displays rules component and prevents document scroll", async () => {
        const user = userEvent.setup();
        renderWithProviders(<App />);
        const appModal = screen.getByTestId(APP_TESTIDS.APP_MODAL);
        const rulesButton = screen.getByRole("button", { name: /rules/i });
        await user.click(rulesButton);
        expect(appModal).toHaveStyle(`
        display:flex
        `);
        expect(document.body).toHaveStyle(`overflow:hidden`);
    });
    test("rules close button closes modal and restores document scroll", async () => {
        const user = userEvent.setup();
        renderWithProviders(<App />);
        const appModal = screen.getByTestId(APP_TESTIDS.APP_MODAL);
        const rulesCloseBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);
        await user.click(rulesCloseBtn);
        expect(appModal).toHaveStyle("display:none");
        expect(document.body).toHaveStyle("overflow:auto");
    });
    test("shows 'you picked' text and choice after user clicks on a choice", async () => {
        const user = userEvent.setup();
        renderWithProviders(<App />);
        const choice = screen.getByTestId(
            CHOICE_TESTIDS(Roles.PAPER).CHOICE_CONTAINER
        );
        await user.click(choice);

        const userPickElement = screen.getByTestId(
            USER_PICK_TESTIDS.USER_PICK_CONTAINER
        );

        expect(userPickElement).toBeInTheDocument();
    });
});
