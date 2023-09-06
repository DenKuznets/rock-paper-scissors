import type { Meta, StoryObj } from "@storybook/react";

import Choose from "./Choose";
import { Box } from "@mui/material";
import { gradients } from "../../ts/colors";

const meta: Meta<typeof Choose> = {
    title: "Choose",
    component: Choose,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
    // argTypes: {},
    decorators: [
        (Story) => (
            <div
                style={{
                    // margin: "3em",
                    display: "flex",
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
