import { userEvent, within } from "@storybook/testing-library";
import getChoiceTestIds from "../Choice/choiceTestIds";
import { CHOICE_TESTID_SUFFIXES } from "../Choice/Choice";

export const userChoice =
    (role: string) =>
        async ({ canvasElement }: { canvasElement: HTMLElement }) => {
            const canvas = within(canvasElement);
            const testids = getChoiceTestIds(role);
            const choiceElement = canvas.getByTestId(
                testids[`${role}${CHOICE_TESTID_SUFFIXES.container}`]
            );
            await userEvent.click(choiceElement);
        };
