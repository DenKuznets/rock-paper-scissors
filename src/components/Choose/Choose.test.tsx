import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { CHOICE_ROLES } from "../Choice/Choice";
import userEvent from "@testing-library/user-event";
import { useSelector, useDispatch } from "react-redux";
import { appSlice, AppState, initialState } from "../../app/appSlice";

describe("Choose", () => {
    test("renders correctly", () => {
        renderWithProviders(<Choose />);

        const chooseContainer = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONTAINER
        );
        const connectingLine = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONNECTING_LINE
        );
        const rockElement = screen.getByAltText(CHOICE_ROLES.CHOICE_ROCK);
        const paperElement = screen.getByAltText(CHOICE_ROLES.CHOICE_PAPER);
        const scissorsElement = screen.getByAltText(
            CHOICE_ROLES.CHOICE_SCISSORS
        );
        const choiceSockets = screen.getAllByTestId(
            CHOOSE_TESTIDS.CHOICE_SOCKET
        );

        expect(chooseContainer).toBeInTheDocument();
        expect(connectingLine).toBeInTheDocument();
        expect(choiceSockets).toHaveLength(3);
        expect(rockElement).toBeInTheDocument();
        expect(paperElement).toBeInTheDocument();
        expect(scissorsElement).toBeInTheDocument();
    });
    test("changes clicked socket position to the middle left", async () => {
        renderWithProviders(<Choose />);
        const choiceSockets = screen.getAllByTestId(
            CHOOSE_TESTIDS.CHOICE_SOCKET
        );
        const randomSocket =
            choiceSockets[Math.floor(Math.random() * choiceSockets.length)];
        expect(randomSocket).toHaveStyle(`
            left: 0;
            top:50%;
            right: initial;
            bottom: initial;
        `);
    });
});
