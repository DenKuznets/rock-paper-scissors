import type { Meta, StoryObj } from "@storybook/react";
import { Roles } from "../../ts/roles";
import Result, { RESULT_OPTIONS } from "./Result";
import { gradients } from "../../ts/theme";
import { initialState } from "../../app/appSlice";
import { Provider } from "react-redux";
import { setupStore } from "../../app/store";

const meta: Meta<typeof Result> = {
    title: "Result",
    component: Result,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },

    decorators: [
        (Story) => (
            <div style={{ width:"100vw", height:"100vh", background: gradients.backgroundGradient }}>
                <Story />
            </div>
        ),
    ],
};

const mockedStore = (
    userChoice: string,
    houseChoice: string,
    resultOption: string
) => {
    return setupStore({
        app: {
            ...initialState,
            userChoice: userChoice,
            houseChoice: houseChoice,
            result: resultOption,
        },
    });
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Default: Story = {
    decorators: [
        (story) => (
            <Provider
                store={mockedStore(Roles.PAPER, Roles.ROCK, RESULT_OPTIONS.WIN)}
            >
                {story()}
            </Provider>
        ),
    ],
};
