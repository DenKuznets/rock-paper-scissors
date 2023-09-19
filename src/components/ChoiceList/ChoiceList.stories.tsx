import type { Meta, StoryObj } from "@storybook/react";
import ChoiceList from "./ChoiceList";
import { gradients } from "../../ts/colors";

const meta: Meta<typeof ChoiceList> = {
    title: "ChoiceList",
    component: ChoiceList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div style={{ background: gradients.backgroundGradient }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ChoiceList>;

export const Main: Story = {};
