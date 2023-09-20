import { renderWithProviders, screen } from "../../ts/utils-for-tests";
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
        const userPickText = screen.getByTestId(
            USER_PICK_TESTIDS.USER_PICK_TEXT
        );

        expect(userPickContainer).toBeInTheDocument();
        expect(choice).toBeInTheDocument();
        expect(userPickText).toBeInTheDocument();
    });
};
