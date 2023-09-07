import { render, screen } from "@testing-library/react";
import Choice, { CHOICE_TESTIDS } from "./Choice";
import { Roles } from "../../ts/roles";
import userEvent from "@testing-library/user-event";
import { chosenChoiceScale } from "../Choice/Choice";
import coords from "../../ts/coords";

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

    test("renders picture of rock in the top right position if role rock prop passed to it", () => {
        render(<Choice role={Roles.ROCK} />);

        const rockImage = screen.getByAltText(Roles.ROCK);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        expect(rockImage).toBeInTheDocument();
        expect(choiceContainer).toHaveStyle({
            top: coords.topRight.top,
            left: coords.topRight.left,
            bottom: coords.topRight.bottom,
            right: coords.topRight.right,
        });
    });

    test("renders picture of paper in the top left position if role paper prop passed to it", () => {
        render(<Choice role={Roles.PAPER} />);
        const paperImage = screen.getByAltText(Roles.PAPER);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        expect(paperImage).toBeInTheDocument();
        expect(choiceContainer).toHaveStyle({
            top: coords.topLeft.top,
            left: coords.topLeft.left,
            bottom: coords.topLeft.bottom,
            right: coords.topLeft.right,
        });
    });

    test("renders picture of scissors in the middle bottom position if role scissors prop passed to it", () => {
        render(<Choice role={Roles.SCISSORS} />);

        const scissorsImage = screen.getByAltText(Roles.SCISSORS);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        expect(scissorsImage).toBeInTheDocument();
        expect(choiceContainer).toHaveStyle({
            top: coords.bottomMiddle.top,
            left: coords.bottomMiddle.left,
            bottom: coords.bottomMiddle.bottom,
            right: coords.bottomMiddle.right,
        });
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

    test("Scissors element changes position to the userChoice coords and gets bigger then clicked for the first time", async () => {
        const user = userEvent.setup();
        render(<Choice role={Roles.SCISSORS} />);
        const choiceContainer = screen.getByTestId(
            CHOICE_TESTIDS.CHOICE_CONTAINER
        );

        await user.click(choiceContainer);
        expect(choiceContainer).toHaveStyle(
            `transform: scale(${chosenChoiceScale})`
        );
        expect(choiceContainer).toHaveStyle({
            top: coords.userChoice.top,
            bottom: coords.userChoice.bottom,
            left: coords.userChoice.left,
            right: coords.userChoice.right,
        });
    });
});
