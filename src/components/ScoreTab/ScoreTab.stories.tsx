import type { Meta, StoryObj } from "@storybook/react";

import ScoreTab from "./ScoreTab";
import { Box } from "@mui/material";
import { gradients } from "../../ts/colors";

const meta: Meta<typeof ScoreTab> = {
    title: "ScoreTab",
    component: ScoreTab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    background: gradients.backgroundGradient,
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ScoreTab>;

export const Main: Story = {
    render: () => <ScoreTab />,
};
