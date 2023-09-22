import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import { initialState } from "../../app/appSlice";
import App from "../../app/App";
import { RESULT_TESTIDS } from "./Result";

export const resultTest = (
    userChoice: string,
    houseChoice: string,
    resultOption: string
) => {
    return test(`${resultOption} when user choose ${userChoice} and house choose ${houseChoice}`, async () => {
        renderWithProviders(<App />, {
            preloadedState: {
                app: {
                    ...initialState,
                    userChoice: userChoice,
                    houseChoice: houseChoice,
                },
            },
        });
        const result = await screen.findByTestId(
            RESULT_TESTIDS.RESULT_CONTAINER,
            {},
            { timeout: 2001 }
        );
        expect(result).toHaveTextContent(resultOption);
    });
};
