import { steps } from "./Step/Step";

const step1sx = {
    mt: { xs: "6.5rem", md: "4rem" },
    opacity: "1",
    transition: "opacity 1s",
};
const step2sx = {
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
const step3sx = {
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

export const getStepSx = (step: steps) => {
     switch (step) {
         case steps.one:
             return step1sx;
         case steps.two:
             return step2sx;
         case steps.three:
             return step3sx;
         default:
             return {};
     }
}