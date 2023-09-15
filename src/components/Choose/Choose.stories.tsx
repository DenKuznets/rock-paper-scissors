import type { Meta, StoryObj } from "@storybook/react";
import Choose from "./Choose";
import { gradients } from "../../ts/colors";
import { Roles } from "../../ts/roles";
import { userChoice } from "./chooseStorybookFunctions";
import { Box } from "@mui/material";

const meta: Meta<typeof Choose> = {
    title: "Choose",
    component: Choose,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },

    decorators: [
        (Story) => (
            <Box
                sx={{
                    background: gradients.backgroundGradient,
                }}
            >
                <Box
                    sx={{
                        padding: "10rem 0",
                        width: "100vw",
                    }}
                >
                    <Story />
                </Box>
            </Box>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Choose>;

export const Main: Story = {};

export const UserChoiceRock: Story = {
    play: userChoice(Roles.ROCK),
};
export const UserChoicePaper: Story = {
    play: userChoice(Roles.PAPER),
};
export const UserChoiceScissors: Story = {
    play: userChoice(Roles.SCISSORS),
};
