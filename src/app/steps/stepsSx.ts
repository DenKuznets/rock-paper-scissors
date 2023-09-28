export const step1sx = {
    mt: { xs: "6.5rem", md: "4rem" },
    opacity: "1",
    transition: "opacity 1s",
};
export const step2sx = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    mt: { xs: "6.3rem", md: "4.1rem" },
    ml: "auto",
    mr: "auto",
    maxWidth: {
        xs: "24rem",
        md: "41rem",
    },
    position: "relative",
};
export const step3sx = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    mt: { xs: "6.3rem", md: "4.1rem" },
    ml: "auto",
    mr: "auto",
    maxWidth: {
        xs: "24rem",
    },
    position: "relative",
    animationName: "width-change",
    animationDuration: "1s",
    animationFillMode: "forwards",
    "@keyframes width-change": {
        md: {
            "0%": {
                maxWidth: "41rem",
            },
            "100%": {
                maxWidth: "60rem",
            },
        },
    },
};
