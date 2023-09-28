import {
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
} from "../appSlice";
import { useAppSelector } from "../reduxHooks";

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

export const useGetStepSx = () => {
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    switch (true) {
        case showStep1:
            return step1sx;
        case showStep2:
            return step2sx;
        case showStep3:
            return step3sx;
        default:
            return {};
    }
};
