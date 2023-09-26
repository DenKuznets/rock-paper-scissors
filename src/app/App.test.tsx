import App from "./App";
import { SCORETAB_TESTIDS } from "../components/ScoreTab/ScoreTab";
import { RULES_TESTIDS } from "../components/Rules/Rules";
import { APP_TESTIDS } from "./App";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "../ts/utils-for-tests";
import { Roles } from "../ts/roles";
import { getRandomIndex } from "../ts/utils";
import { SHOWRULES_TESTIDS } from "../components/ShowRules/ShowRules";

test("renders correctly", () => {
    renderWithProviders(<App />);

    const ScoreTabElement = screen.getByTestId(
        SCORETAB_TESTIDS.SCORETAB_CONTAINER
    );

    const rulesButton = screen.getByRole("button", { name: /rules/i });

    expect(ScoreTabElement).toBeInTheDocument();
    expect(rulesButton).toBeInTheDocument();
});

test("rules button click displays rules component and prevents document scroll", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    const rulesButton = screen.getByTestId(
        SHOWRULES_TESTIDS.SHOWRULES_CONTAINER
    );
    await user.click(rulesButton);
    const rulesComponent = screen.getByTestId(RULES_TESTIDS.RULES_CONTAINER);
    expect(rulesComponent).toBeInTheDocument();
    expect(document.body).toHaveStyle(`overflow:hidden`);
});

test("rules close button closes modal and restores document scroll", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    const rulesButton = screen.getByRole("button", { name: /rules/i });
    await user.click(rulesButton);
    const rulesCloseBtn = screen.getByTestId(RULES_TESTIDS.RULES_CLOSE_BTN);
    await user.click(rulesCloseBtn);
    expect(
        screen.queryByTestId(RULES_TESTIDS.RULES_CONTAINER)
    ).not.toBeInTheDocument();
    expect(document.body).toHaveStyle("overflow:auto");
});

test("function getRandomIndex returns random integer between 0 and the amount of Roles", () => {
    for (let index = 0; index < 1000; index++) {
        const index = getRandomIndex();
        expect(index).toBeLessThan(Object.keys(Roles).length);
        expect(index).toBeGreaterThanOrEqual(0);
    }
});
