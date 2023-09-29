import { selectShowStep1, selectShowStep2, selectShowStep3 } from "../appSlice";
import { useAppSelector } from "../reduxHooks";

export const useGetStepSx = () => {
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);

    return {
        opacity: "1",
        transition: "opacity 1s",
        mt: { xs: "6.3rem", md: "4.1rem" },
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        ml: "auto",
        mr: "auto",
        maxWidth: showStep1
            ? "unset"
            : {
                  xs: "24rem",
                  md: showStep2 ? "41rem" : "unset",
              },
        position: "relative",
        animationName: showStep3 ? "width-change" : "",
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
