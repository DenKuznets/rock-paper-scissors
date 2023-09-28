import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import { SxProps, Theme } from "@mui/material/styles";
import getChildren from "../stepsChildren";

type Props = {
    stepRef?: ForwardedRef<HTMLDivElement>;
    sx?: SxProps<Theme> | undefined;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
    step?: steps;
};

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

export enum steps {
    one = 1,
    two,
    three,
}

export const Step: React.FC<Props> = ({
    step,
    stepRef,
    handleTransitionEnd,
    sx,
    handleOnMount,
}) => {
    useEffect(() => {
        if (handleOnMount) {
            handleOnMount();
        }
    }, [handleOnMount]);

    let child;
    if (step) {
        child = getChildren(step);
    }
    return (
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={{ ...sx }}
                ref={stepRef}
                onTransitionEnd={(e) =>
                    handleTransitionEnd && handleTransitionEnd(e)
                }
            >
                {child}
            </Box>
        </FadeIn>
    );
};

export default Step;
