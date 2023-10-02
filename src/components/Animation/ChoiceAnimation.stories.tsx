import type { Meta, StoryObj } from "@storybook/react";
import ChoiceAnimation from "./ChoiceAnimation";

const meta: Meta<typeof ChoiceAnimation> = {
    title: "Animation",
    component: ChoiceAnimation,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    margin: "3em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // width: "150px",
                    // height: "150px",
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
type Story = StoryObj<typeof ChoiceAnimation>;

export const Main: Story = {};
