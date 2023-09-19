import { userEvent, within } from "@storybook/testing-library";
import { CHOICE_TESTIDS } from "../Choice/Choice";

export const userChoice =
    (role: string) =>
        async ({ canvasElement }: { canvasElement: HTMLElement }) => {
            const canvas = within(canvasElement);
            const choiceElement = canvas.getByTestId(
                CHOICE_TESTIDS(role).CHOICE_CONTAINER
            );
            await userEvent.click(choiceElement);
        };
