import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Choose from "./Choose";
import { gradients } from "../../ts/colors";
import { Roles } from "../../ts/roles";
import getChoiceTestIds from "../Choice/choiceTestIds";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";
import { userChoice } from "./chooseStorybookFunctions";
import { Box } from "@mui/material";

const meta: Meta<typeof Choose> = {
    title: "Choose",
    component: Choose,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },

    decorators: [
        (Story) => (
            <Box
                sx={{
                    background: gradients.backgroundGradient,
                    // minHeight: "770px",
                }}
                className="App"
            >
                <Box
                    sx={{
                        // height: "100vh",
                        // minHeight: { xs: "740px", md: "600px" },
                        padding: { xs: "2rem", md: "3rem" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
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
