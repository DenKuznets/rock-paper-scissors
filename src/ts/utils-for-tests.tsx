import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppStore, RootState, setupStore } from "../app/store";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "../ts/theme";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export const renderWithProviders = (
    ui: ReactElement,
    {
        // изменить начальное состояние
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return (
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from "@testing-library/react";
