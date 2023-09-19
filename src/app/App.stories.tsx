import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import { Roles } from "../ts/roles";
import { within, userEvent } from "@storybook/testing-library";

const meta: Meta<typeof App> = {
    title: "App",
    component: App,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
    // argTypes: {
    //     role: {
    //         options: [Roles.PAPER, Roles.ROCK, Roles.SCISSORS],
    //         control: {
    //             type: "select",
    //         },
    //     },
    // },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};

// export const UserChoiceRock: Story = {
//     play: userChoice(Roles.ROCK),
// };
// export const UserChoicePaper: Story = {
//     play: userChoice(Roles.PAPER),
// };
// export const UserChoiceScissors: Story = {
//     play: userChoice(Roles.SCISSORS),
// };

export const ShowRules: Story = {
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const rulesButton = canvas.getByRole("button", { name: /rules/i });
        await userEvent.click(rulesButton);
    },
};
