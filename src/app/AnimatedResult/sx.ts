export const useGetStepSx = (showResult: boolean) => {
    return {
        opacity: "1",
        transition: "opacity 1s",
        mt: { xs: "6.3rem", md: "4.1rem" },
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        ml: "auto",
        mr: "auto",
        maxWidth: {
            xs: "24rem",
            md: showResult ? "unset" : "41rem",
        },
        position: "relative",
        animationName: showResult ? "width-change" : "",
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
};
