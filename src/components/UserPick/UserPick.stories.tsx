import type { Meta, StoryObj } from "@storybook/react";
import { Roles } from "../../ts/roles";
import UserPick from "./UserPick";
import { gradients } from "../../ts/colors";
import { initialState } from "../../app/appSlice";
import { Provider } from "react-redux";
import { setupStore } from "../../app/store";

const meta: Meta<typeof UserPick> = {
    title: "UserPick",
    component: UserPick,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },

    decorators: [
        (Story) => (
            <div style={{ background: gradients.backgroundGradient }}>
                <Story />
            </div>
        ),
    ],
};

const mockedStore = (role: string) => {
    return setupStore({
        app: {
            ...initialState,
            userChoice: role,
        },
    });
};

export default meta;
type Story = StoryObj<typeof UserPick>;

export const Paper: Story = {
    decorators: [
        (story) => (
            <Provider store={mockedStore(Roles.PAPER)}>{story()}</Provider>
        ),
    ],
};
export const ROCK: Story = {
    decorators: [
        (story) => (
            <Provider store={mockedStore(Roles.ROCK)}>{story()}</Provider>
        ),
    ],
};
export const SCISSORS: Story = {
    decorators: [
        (story) => (
            <Provider store={mockedStore(Roles.SCISSORS)}>{story()}</Provider>
        ),
    ],
};
