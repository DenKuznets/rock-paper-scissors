import { render, screen } from "@testing-library/react";
import Choice, { CHOICE_ROLES, CHOICE_TESTIDS } from "./Choice";

describe("Choice", () => {
    test("renders correctly", () => {
        render(<Choice role={CHOICE_ROLES.CHOICE_PAPER} />);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );
        const choiceImage = screen.getByTestId(CHOICE_TESTIDS.CHOICE_IMAGE);

        expect(choiceContainer).toBeInTheDocument();
        expect(choiceImage).toBeInTheDocument();
    });
    test("renders correct picture if role rock prop passed to it", () => {
        render(<Choice role={CHOICE_ROLES.CHOICE_ROCK} />);
        const rockImage = screen.getByAltText(CHOICE_ROLES.CHOICE_ROCK);
        expect(rockImage).toBeInTheDocument();
    });
    test("renders correct picture if role paper prop passed to it", () => {
        render(<Choice role={CHOICE_ROLES.CHOICE_PAPER} />);
        const rockImage = screen.getByAltText(CHOICE_ROLES.CHOICE_PAPER);
        expect(rockImage).toBeInTheDocument();
    });
    test("renders correct picture if role scissors prop passed to it", () => {
        render(<Choice role={CHOICE_ROLES.CHOICE_SCISSORS} />);
        const rockImage = screen.getByAltText(CHOICE_ROLES.CHOICE_SCISSORS);
        expect(rockImage).toBeInTheDocument();
    });
});
