import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choice from "./Choice";
import { choiceTestIds } from "./Choice";

export const testRendersCorrectly = (role: string) => {
    return test(role, () => {
        renderWithProviders(<Choice role={role} />);
        const choiceContainer = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
        );
        // const choiceImage = screen.getByTestId(
        //     choiceTestIds(role).CHOICE_IMAGE
        // );
        // const choiceColoredBorder = screen.getByTestId(
        //     choiceTestIds(role).CHOICE_COLORED_BORDER
        // );
        // const choiceImageBG = screen.getByTestId(
        //     choiceTestIds(role).CHOICE_IMAGE_BACKGROUND
        // );

        expect(choiceContainer).toBeInTheDocument();
        // expect(choiceImage).toBeInTheDocument();
        // expect(choiceImageBG).toBeInTheDocument();
        // expect(choiceColoredBorder).toBeInTheDocument();
    });
};
