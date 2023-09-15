import { userEvent, within } from "@storybook/testing-library";
import { choiceTestIds } from "../Choice/Choice";

export const userChoice =
    (role: string) =>
        async ({ canvasElement }: { canvasElement: HTMLElement }) => {
            const canvas = within(canvasElement);
            const choiceElement = canvas.getByTestId(
                choiceTestIds(role).CHOICE_CONTAINER
            );
            await userEvent.click(choiceElement);
        };
