import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "../ts/theme";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
