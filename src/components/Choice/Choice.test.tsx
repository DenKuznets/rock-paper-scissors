import { Roles } from "../../ts/roles";
import { testRendersCorrectly } from "./choiceTestFunctions";

describe("Choice", () => {
    describe("renders correctly role", () => {
        for (let role in Roles) {
            testRendersCorrectly(role);
        }
    });
});
