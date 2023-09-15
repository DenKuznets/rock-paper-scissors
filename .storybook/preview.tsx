import type { Preview, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Theme } from "../src/ts/theme";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import "@storybook/addon-console";
import { Provider } from "react-redux";
import { setupStore } from "../src/app/store";
import React from "react";
/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto

const customViewports = {
    FHD: {
        name: "FHD",
        styles: {
            width: "1920px",
            height: "1080px",
        },
    },
    Desktop: {
        name: "Desktop",
        styles: {
            width: "1366px",
            height: "768px",
        },
    },
};

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
            // defaultViewport: DEFAULT_VIEWPORT,
        },
        // layout: "centered",
        layout: "fullscreen",
    },
};

export const decorators = [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
        GlobalStyles: CssBaseline,
        // Uncomment for theme switching
        Provider: ThemeProvider,
        themes: {
            // Provide your custom themes here
            light: Theme,
            // dark: darkTheme,
        },
        defaultTheme: "light",
    }),
    (Story) => (
        <Provider store={setupStore()}>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
        </Provider>
    ),
];

export default preview;
