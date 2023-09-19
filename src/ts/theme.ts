import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs320: true;
        xs375: true;
    }
}

export const Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xs320: 320,
            xs375: 375,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: ["Barlow Semi Condensed", "sans-serif"].join(","),
    },
    palette: {
        text: {
            primary: "#fff",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // overflow: "hidden",
                    // fontFamily: `'Barlow Semi Condensed', sans-serif`,

                    textTransform: "uppercase",
                },
                img: {
                    userSelect: "none",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    border: "1px solid #fff",
                    minWidth: "8rem",
                    borderRadius: "8px",
                    letterSpacing: "2px",
                    ":hover": {
                        color: "#1976d2",
                    },
                },
            },
        },
    },
});
