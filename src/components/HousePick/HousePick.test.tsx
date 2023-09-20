import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import HousePick, { HOUSE_PICK_TESTIDS } from "./HousePick";
import { initialState } from "../../app/appSlice";
import { Roles } from "../../ts/roles";

test("renders correctly", () => {
    renderWithProviders(<HousePick />, {
        preloadedState: {
            app: {
                ...initialState,
                houseChoice: Roles.PAPER,
            },
        },
    });

    const housePickContainer = screen.getByTestId(
        HOUSE_PICK_TESTIDS.HOUSE_PICK_CONTAINER
    );
    const housePickText = screen.getByTestId(
        HOUSE_PICK_TESTIDS.HOUSE_PICK_TEXT
    );

    expect(housePickContainer).toBeInTheDocument();
    expect(housePickText).toBeInTheDocument();
});
