import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choice from "./Choice";
import { choiceTestIds } from "./Choice";
import coords from "../../ts/coords";
import { Roles } from "../../ts/roles";

export const testRendersCorrectly = (role: string) => {
    return test(role, () => {
        renderWithProviders(<Choice role={role} />);
        const choiceContainer = screen.getByTestId(
            choiceTestIds(role).CHOICE_CONTAINER
        );
        const choiceImage = screen.getByTestId(
            choiceTestIds(role).CHOICE_IMAGE
        );
        const choiceColoredBorder = screen.getByTestId(
            choiceTestIds(role).CHOICE_COLORED_BORDER
        );
        const choiceImageBG = screen.getByTestId(
            choiceTestIds(role).CHOICE_IMAGE_BACKGROUND
        );

        expect(choiceContainer).toBeInTheDocument();
        expect(choiceImage).toBeInTheDocument();
        expect(choiceColoredBorder).toBeInTheDocument();
        expect(choiceImageBG).toBeInTheDocument();
    });
};

// export const testChoicePosition = async (role: string) => {
//     return test(role, async () => {
//         const user = userEvent.setup();
//         renderWithProviders(<Choice role={role} />);
//         const container = screen.getByTestId(
//             choiceTestIds(role).CHOICE_CONTAINER
//         );

//         await user.click(container);

//         expect(container).toHaveStyle({
//             top: coords.userChoice.top,
//             bottom: coords.userChoice.bottom,
//             left: coords.userChoice.left,
//             right: coords.userChoice.right,
//         });
//     });
// };

// export const testOpacityToZero = (role: string) => {
//     return test(role, async () => {
//         const user = userEvent.setup();
//         renderWithProviders(<Choice role={role} />);
//         const clickedElement = screen.getByTestId(
//             choiceTestIds(role).CHOICE_CONTAINER
//         );
//         expect(clickedElement).toBeInTheDocument();
//         const allElements = screen.getAllByTestId("CHOICE_CONTAINER", {
//             exact: false,
//         });

//         expect(allElements).toHaveLength(Object.keys(Roles).length);

//         await user.click(clickedElement);

//         for (let elem of allElements) {
//             if (elem === clickedElement) expect(elem).toBeInTheDocument();
//             else expect(elem).not.toBeInTheDocument();
//         }
//     });
// };
