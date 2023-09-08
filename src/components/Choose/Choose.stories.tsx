import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Choose from "./Choose";
import { gradients } from "../../ts/colors";
import { Roles } from "../../ts/roles";
import getChoiceTestIds from "../Choice/choiceTestIds";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";

const meta: Meta<typeof Choose> = {
    title: "Choose",
    component: Choose,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
    argTypes: {
        userChoice: {
            options: [Roles.PAPER, Roles.ROCK, Roles.SCISSORS, null],
            control: {
                type: "select",
            },
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                    background: gradients.backgroundGradient,
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
type Story = StoryObj<typeof Choose>;

export const Main: Story = {};

export const UserChoiceRock: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const testids = getChoiceTestIds(Roles.ROCK);
        const rockElement = await canvas.getByTestId(
            testids[`${Roles.ROCK}${CHOICE_TESTID_SUFFIXES.container}`]
        );
        await userEvent.click(rockElement);
    },
};
