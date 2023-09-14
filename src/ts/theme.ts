import { createTheme } from "@mui/material";

export const Theme = createTheme({
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
