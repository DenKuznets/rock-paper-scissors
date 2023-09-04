import { render, screen } from "@testing-library/react";
import Choose, { CHOOSE_TESTIDS } from "./Choose";
import { CHOICE_ROLES } from "../Choice/Choice";
import userEvent from "@testing-library/user-event";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { renderWithProviders } from "../../ts/utils-for-tests";

describe("Choose", () => {
    test("renders correctly", () => {
        render(
            <Provider store={store}>
                <Choose />
            </Provider>
        );

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

    test("fades out then choice socket is clicked", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Choose />);
        const choiceSockets = screen.getAllByTestId(
            CHOOSE_TESTIDS.CHOICE_SOCKET
        );
        const chooseContainer = screen.getByTestId(
            CHOOSE_TESTIDS.CHOOSE_CONTAINER
        );
        await user.click(choiceSockets[0]);

        expect(chooseContainer).toHaveStyle("opacity:0");
    });
});
