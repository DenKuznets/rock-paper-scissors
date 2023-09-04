import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "../ts/theme";
import { store } from "./store";
import { Provider } from "react-redux";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </Provider>
    );
};
