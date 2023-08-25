import { render, screen } from "@testing-library/react"
import App from "./App"
import { SCORETAB_TESTIDS } from "./components/ScoreTab/ScoreTab"

describe('App', () => {
    test('renders correctly', () => {
        render(<App />) 
        const ScoreTab = screen.getByTestId(SCORETAB_TESTIDS.SCORETAB_CONTAINER)
        expect(ScoreTab).toBeInTheDocument();
    }) 
})