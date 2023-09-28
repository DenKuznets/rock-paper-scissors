import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import getStepChildren from "../stepsChildren";
import { getStepSx } from "../stepsSx";

type Props = {
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
    step: steps;
};

const Step: React.FC<Props> = ({
    step,
    stepRef,
    handleTransitionEnd,
    handleOnMount,
}) => {
    useEffect(() => {
        if (handleOnMount) {
            handleOnMount();
        }
    }, [handleOnMount]);

    return (
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={getStepSx(step)}
                ref={stepRef}
                onTransitionEnd={(e) =>
                    handleTransitionEnd && handleTransitionEnd(e)
                }
            >
                {getStepChildren(step)}
            </Box>
        </FadeIn>
    );
};

export default Step;


export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

export enum steps {
    one = 1,
    two,
    three,
}