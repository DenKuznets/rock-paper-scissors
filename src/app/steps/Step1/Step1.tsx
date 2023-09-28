import { ForwardedRef, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import { SxProps, Theme } from "@mui/material/styles";


type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
    sx?: SxProps<Theme> | undefined;
};

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Step1: React.FC<Props> = ({
    children,
    stepRef,
    handleTransitionEnd,
    handleOnMount,
    sx,
}) => {
    return (
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={{...sx}}
                onTransitionEnd={(e) =>
                    handleTransitionEnd && handleTransitionEnd(e)
                }
                ref={stepRef}
            >
                {children}
            </Box>
        </FadeIn>
    );
};

export default Step1;
