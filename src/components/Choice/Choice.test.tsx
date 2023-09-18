import { Roles } from "../../ts/roles";
import { testChoicePosition, testRendersCorrectly } from "./choiceTestFunctions";

describe("Choice", () => {
    describe("renders correctly role", () => {
        for (let role in Roles) {
            testRendersCorrectly(role);
        }
    });
});

describe("changes coords to userChoice after user clicks on it", () => {
    for (let role in Roles) {
        testChoicePosition(role);
    }
});