import type { Meta, StoryObj } from "@storybook/react";

import Rules from "./Rules";

const meta: Meta<typeof Rules> = {
    title: "Rules",
    component: Rules,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        // layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Rules>;

export const Main: Story = {
    render: () => <Rules />,
};

export const WithCloseBtn: Story = {
    render: () => <Rules onCloseButtonClick={() => null} />,
};
