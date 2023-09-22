import App, { getRandomIndex } from "./App";
import { SCORETAB_TESTIDS } from "../components/ScoreTab/ScoreTab";
import { RULES_TESTIDS } from "../components/Rules/Rules";
import { APP_TESTIDS } from "./App";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "../ts/utils-for-tests";
import { CHOICE_TESTIDS } from "../components/Choice/Choice";
import { Roles } from "../ts/roles";
import { USER_PICK_TESTIDS } from "../components/UserPick/UserPick";
import { HOUSE_PICK_TESTIDS } from "../components/HousePick/HousePick";

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
    const rulesButton = screen.getByTestId(APP_TESTIDS.APP_RULES_BUTTON);
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

test("function getRandomIndex returns random integer between 0 and the amount of Roles", () => {
    for (let index = 0; index < 1000; index++) {
        const index = getRandomIndex();
        expect(index).toBeLessThan(Object.keys(Roles).length);
        expect(index).toBeGreaterThanOrEqual(0);
    }
});

test("determins house pick and shows 'the house picked' text and house choice then user clicks on option", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    const choice = screen.getByTestId(
        CHOICE_TESTIDS(Roles.PAPER).CHOICE_CONTAINER
    );
    await user.click(choice);
    const housePickComponent = await screen.findByTestId(
        HOUSE_PICK_TESTIDS.HOUSE_PICK_CONTAINER,
        {},
        { timeout: 2001 }
    );

    expect(housePickComponent).toBeInTheDocument();
});
