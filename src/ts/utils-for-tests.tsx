import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "../app/app-providers";
import { AppStore, RootState, setupStore } from "../app/store";
import { PreloadedState } from "@reduxjs/toolkit";

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
    
    return {
        store,
        ...render(ui, { wrapper: AppProviders, ...renderOptions }),
    };
};

export * from "@testing-library/react";
// export { customRender as renderWithProviders };
