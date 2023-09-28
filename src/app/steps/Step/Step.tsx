import { ForwardedRef } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import getStepChildren from "../stepsChildren";
import { getStepSx } from "../stepsSx";
import { getStepTransitionEnd } from "../transitionsFn";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import {
    selectShowStep2,
    selectShowStep3,
} from "../../appSlice";

type Props = {
    stepRef?: ForwardedRef<HTMLDivElement>;
};

const Step: React.FC<Props> = ({
    stepRef }) => {
    const step = useGetStep();
    const dispatch = useAppDispatch();
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

const useGetStep = () => {
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    if (showStep2) return steps.two;
    if (showStep3) return steps.three;
    return steps.one;
};
