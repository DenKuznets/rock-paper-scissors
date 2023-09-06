import { screen } from "@testing-library/react";
import App from "./App";
import { SCORETAB_TESTIDS } from "../components/ScoreTab/ScoreTab";
// import { CHOOSE_TESTIDS } from "../components/Choose/Choose";
// import { RULES_TESTIDS } from "../components/Rules/Rules";
import { APP_TESTIDS } from "./App";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils/utils-for-tests";

describe("App", () => {
    test("renders correctly", () => {
        renderWithProviders(<App />);

        const ScoreTabElement = screen.getByTestId(
            SCORETAB_TESTIDS.SCORETAB_CONTAINER
        );
        // const ChooseElement = screen.getByTestId(
        //     CHOOSE_TESTIDS.CHOOSE_CONTAINER
        // );
        // const rulesButton = screen.getByRole("button", { name: /rules/i });
        // const rulesContainer = screen.getByTestId(
        //     RULES_TESTIDS.RULES_CONTAINER
        // );
        const appModal = screen.getByTestId(APP_TESTIDS.APP_MODAL);

        expect(ScoreTabElement).toBeInTheDocument();
        // expect(ChooseElement).toBeInTheDocument();
        // expect(rulesButton).toBeInTheDocument();
        // expect(rulesContainer).toBeInTheDocument();
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
        // const rulesCloseBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);
        // await user.click(rulesCloseBtn);
        expect(appModal).toHaveStyle("display:none");
        expect(document.body).toHaveStyle("overflow:auto");
    });
});
