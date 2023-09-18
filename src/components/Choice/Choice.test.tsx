import { Roles } from "../../ts/roles";
import {
    // testChoicePosition,
    // testOpacityToZero,
    testRendersCorrectly,
} from "./choiceTestFunctions";

describe("Choice", () => {
    describe("renders correctly role", () => {
        for (let role in Roles) {
            testRendersCorrectly(role);
        }
    });

    // describe("changes coords to userChoice and after user clicks on it", () => {
    //     for (let role in Roles) {
    //         testChoicePosition(role);
    //     }
    // });
    // describe("sets opacity to 0 if user click on another choice", () => {
    //     for (let role in Roles) {
    //         testOpacityToZero(role);
    //     }
    // });
});
