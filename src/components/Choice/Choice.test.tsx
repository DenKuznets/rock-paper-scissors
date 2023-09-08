import { render, screen } from "@testing-library/react";
import Choice, { CHOICE_TESTID_SUFFIXES } from "./Choice";
import { Roles } from "../../ts/roles";
import userEvent from "@testing-library/user-event";
import { chosenChoiceScale } from "../Choice/Choice";
import coords from "../../ts/coords";
import getChoiceTestIds from "./choiceTestIds";

describe("Choice", () => {
    test("renders correctly", () => {
        render(<Choice role={Roles.PAPER} />);
        const testids = getChoiceTestIds(Roles.PAPER);
        const choiceContainer = screen.getByTestId(
            testids[`${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.container}`]
        );
        const choiceImage = screen.getByTestId(
            testids[`${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.image}`]
        );
        const choiceColoredBorder = screen.getByTestId(
            testids[`${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.coloredBorder}`]
        );
        const choiceImageBG = screen.getByTestId(
            testids[`${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.imageBackground}`]
        );

        expect(choiceContainer).toBeInTheDocument();
        expect(choiceImage).toBeInTheDocument();
        expect(choiceImageBG).toBeInTheDocument();
        expect(choiceColoredBorder).toBeInTheDocument();
    });

    test("renders picture of rock in the top right position if role rock prop passed to it", () => {
        render(<Choice role={Roles.ROCK} />);
        const testids = getChoiceTestIds(Roles.ROCK);
        const rockImage = screen.getByAltText(Roles.ROCK);
        const choiceContainer = screen.getByTestId(
            testids[`${Roles.ROCK}${CHOICE_TESTID_SUFFIXES.container}`]
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
        const testids = getChoiceTestIds(Roles.PAPER);
        const choiceContainer = screen.getByTestId(
            testids[`${Roles.PAPER}${CHOICE_TESTID_SUFFIXES.container}`]
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
        const testids = getChoiceTestIds(Roles.SCISSORS);
        const choiceContainer = screen.getByTestId(
            testids[`${Roles.SCISSORS}${CHOICE_TESTID_SUFFIXES.container}`]
        );

        expect(scissorsImage).toBeInTheDocument();
        expect(choiceContainer).toHaveStyle({
            top: coords.bottomMiddle.top,
            left: coords.bottomMiddle.left,
            bottom: coords.bottomMiddle.bottom,
            right: coords.bottomMiddle.right,
        });
    });
});
