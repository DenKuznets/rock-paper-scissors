import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import { Roles } from "../ts/roles";
import { within, userEvent } from "@storybook/testing-library";
import Choice, { CHOICE_TESTIDS } from "../components/Choice/Choice";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { initialState } from "./appSlice";

const meta: Meta<typeof App> = {
    title: "App",
    component: App,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};

export const ShowRules: Story = {
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const rulesButton = canvas.getByRole("button", { name: /rules/i });
        await userEvent.click(rulesButton);
    },
};

export const UserClickedPaper: Story = {
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const choice = canvas.getByTestId(
            CHOICE_TESTIDS(Roles.PAPER).CHOICE_CONTAINER
        );
        await userEvent.click(choice);
    },
};

const mockedStore = (userRole: string, houseRole: string) => {
    return setupStore({
        app: {
            ...initialState,
            userChoice: userRole,
            houseChoice: houseRole,
        },
    });
};

export const UserChoicePaperHouseChoiceRock: Story = {
    decorators: [
        (story) => (
            <Provider store={mockedStore(Roles.PAPER, Roles.ROCK)}>
                {story()}
            </Provider>
        ),
    ],
};
