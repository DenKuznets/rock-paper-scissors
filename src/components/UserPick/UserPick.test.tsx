import { Roles } from "../../ts/roles";
import { testRendersCorrectly } from "./UserPickTestFunctions";

describe("renders correctly", () => {
    for (let role in Roles) {
        testRendersCorrectly(role);
    }
});
