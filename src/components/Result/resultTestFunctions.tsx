import { renderWithProviders, screen } from "../../ts/utils-for-tests";
import { initialState } from "../../app/appSlice";
import Result, { RESULT_TESTIDS } from "./Result";

export const resultTest = (
    userChoice: string,
    houseChoice: string,
    resultOption: string
) => {
    return test(`${resultOption} when user choose ${userChoice} and house choose ${houseChoice}`, async () => {
        renderWithProviders(<Result />, {
            preloadedState: {
                app: {
                    ...initialState,
                    userChoice: userChoice,
                    houseChoice: houseChoice,
                    result: resultOption,
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
