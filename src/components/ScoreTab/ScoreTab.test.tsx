import { render, screen } from "@testing-library/react";
import ScoreTab from "./ScoreTab";

describe("ScoreTab", () => {
    test("renders correctly", () => {
        render(<ScoreTab />);

        const header = screen.getByRole("heading");
        

        expect(header).toBeInTheDocument();
    });
});
