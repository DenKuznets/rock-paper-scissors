import { render, screen } from "@testing-library/react";
import Choice, { CHOICE_TESTIDS } from "./Choice";
import { Roles } from "../../ts/roles";
import userEvent from "@testing-library/user-event";

describe("Choice", () => {
    test("renders correctly", () => {
        render(<Choice role={Roles.PAPER} />);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );
        const choiceImage = screen.getByTestId(CHOICE_TESTIDS.CHOICE_IMAGE);
        const choiceColoredBorder = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_COLORED_BORDER
        );
        const choiceImageBG = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_IMAGE_BACKGROUND
        );

        expect(choiceContainer).toBeInTheDocument();
        expect(choiceImage).toBeInTheDocument();
        expect(choiceImageBG).toBeInTheDocument();
        expect(choiceColoredBorder).toBeInTheDocument();
    });
    test("renders picture of rock if role rock prop passed to it", () => {
        render(<Choice role={Roles.ROCK} />);
        const rockImage = screen.getByAltText(Roles.ROCK);
        expect(rockImage).toBeInTheDocument();
    });
    test("renders picture of paper if role paper prop passed to it", () => {
        render(<Choice role={Roles.PAPER} />);
        const rockImage = screen.getByAltText(Roles.PAPER);
        expect(rockImage).toBeInTheDocument();
    });
    test("renders picture of scissors if role scissors prop passed to it", () => {
        render(<Choice role={Roles.SCISSORS} />);
        const rockImage = screen.getByAltText(Roles.SCISSORS);
        expect(rockImage).toBeInTheDocument();
    });
    test("gets bigger then hovered", async () => {
        const user = userEvent.setup();
        render(<Choice role={Roles.SCISSORS} />);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        await user.hover(choiceContainer);
        expect(choiceContainer).toHaveStyle("transform: scale(1.05)");
    });
    test("changes position and gets bigger then clicked first time and does nothing then clicked more", async () => {
        const user = userEvent.setup();
        render(<Choice role={Roles.SCISSORS} />);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        expect(choiceContainer).toHaveStyle({
            top: "100%",
            left: "50%",
            bottom: "0",
            right: "50%",
        });
        await user.click(choiceContainer);
        expect(choiceContainer).toHaveStyle("transform: scale(1.55)");
        expect(choiceContainer).toHaveStyle({
            top: "50%",
            bottom: "50%",
            left: "0",
            right: "100%",
        });
        await user.click(choiceContainer);
        expect(choiceContainer).toHaveStyle("transform: scale(1.55)");
        expect(choiceContainer).toHaveStyle({
            top: "50%",
            bottom: "50%",
            left: "0",
            right: "100%",
        });
    });
});
