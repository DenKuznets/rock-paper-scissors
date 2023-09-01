import type { Meta, StoryObj } from "@storybook/react";

import Choose from "./Choose";
import { Box } from "@mui/material";

const meta: Meta<typeof Choose> = {
    title: "Choose",
    component: Choose,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // argTypes: {},
    decorators: [
        (Story) => (
            <Box sx={{ padding: "0rem" }}>
                <Story />
            </Box>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Choose>;

export const Main: Story = {};
