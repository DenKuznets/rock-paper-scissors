import type { Meta, StoryObj } from "@storybook/react";
import { Roles } from "../../ts/roles";
import Choice from "./Choice";

const meta: Meta<typeof Choice> = {
    title: "Choice",
    component: Choice,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    argTypes: {
        role: {
            options: [Roles.PAPER, Roles.ROCK, Roles.SCISSORS],
            control: {
                type: "select",
            },
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    margin: "3em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px",
                    height: "150px",
                    position: "relative",
                }}
            >
                <div style={{ position: "relative" }}>
                    <Story />
                </div>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Choice>;

export const Rock: Story = {
    args: {
        role: Roles.ROCK,
    },
};
export const Paper: Story = {
    args: {
        role: Roles.PAPER,
    },
};
export const Scissors: Story = {
    args: {
        role: Roles.SCISSORS,
    },
};
