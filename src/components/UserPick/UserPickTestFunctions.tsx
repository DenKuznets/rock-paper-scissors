import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "../../ts/utils-for-tests";
// import Choice from "./Choice";
// import { CHOICE_TESTIDS } from "./Choice";
import { Roles } from "../../ts/roles";
import UserPick, { USER_PICK_TESTIDS } from "./UserPick";
import { CHOICE_TESTIDS } from "../Choice/Choice";
import { initialState } from "../../app/appSlice";

export const testRendersCorrectly = (role: string) => {
    return test(role, () => {
        renderWithProviders(<UserPick />, {
            preloadedState: {
                app: {
                    ...initialState,
                    userChoice: role,
                },
            },
        });

        const userPickContainer = screen.getByTestId(
            USER_PICK_TESTIDS.USER_PICK_CONTAINER
        );
        const choice = screen.getByTestId(
            CHOICE_TESTIDS(role).CHOICE_CONTAINER
        );

        expect(userPickContainer).toBeInTheDocument();
        expect(choice).toBeInTheDocument();
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
