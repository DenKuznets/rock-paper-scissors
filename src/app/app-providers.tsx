import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "../ts/theme";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { PropsWithChildren } from "react";

export const AppProviders = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Provider store={setupStore()}>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </Provider>
    );
};
