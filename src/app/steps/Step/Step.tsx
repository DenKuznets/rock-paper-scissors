import { ForwardedRef, useEffect } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import getStepChildren from "../stepsChildren";
import { getStepSx } from "../stepsSx";
import { getStepTransitionEnd } from "../transitionsFn";
import { useAppDispatch } from "../../reduxHooks";

type Props = {
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleOnMount?: () => void;
    step: steps;
};

const Step: React.FC<Props> = ({
    step,
    stepRef,
    handleOnMount,
}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (handleOnMount) {
            handleOnMount();
        }
    }, [handleOnMount]);

    const transitionEndFunc = getStepTransitionEnd(step);

    return (
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={getStepSx(step)}
                ref={stepRef}
                onTransitionEnd={(e) =>
                    transitionEndFunc && transitionEndFunc(dispatch, e)
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
