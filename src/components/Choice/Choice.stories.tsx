import type { Meta, StoryObj } from "@storybook/react";

import Choice, { CHOICE_ROLES } from "./Choice";

const meta: Meta<typeof Choice> = {
    title: "Choice",
    component: Choice,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    argTypes: {
        role: {
            options: [
                CHOICE_ROLES.CHOICE_PAPER,
                CHOICE_ROLES.CHOICE_ROCK,
                CHOICE_ROLES.CHOICE_SCISSORS,
            ],
            control: {
                type: "select",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Choice>;

export const Rock: Story = {
    args: {
        role: CHOICE_ROLES.CHOICE_ROCK,
    },
};
export const Paper: Story = {
    args: {
        role: CHOICE_ROLES.CHOICE_PAPER,
    },
};
export const Scissors: Story = {
    args: {
        role: CHOICE_ROLES.CHOICE_SCISSORS,
    },
};
