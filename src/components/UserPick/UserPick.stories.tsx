import type { Meta, StoryObj } from "@storybook/react";
import { Roles } from "../../ts/roles";
import UserPick from "./UserPick";

const meta: Meta<typeof UserPick> = {
    title: "UserPick",
    component: UserPick,
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
type Story = StoryObj<typeof UserPick>;

export const Main: Story = {};
