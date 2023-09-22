import { renderWithProviders, screen } from "../ts/utils-for-tests";
import { initialState } from "./appSlice";
import App from "./App";
import { APP_TESTIDS } from "./App";

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
            APP_TESTIDS.APP_RESULT,
            {},
            { timeout: 2001 }
        );
        expect(result).toHaveTextContent(resultOption);
    });
};
