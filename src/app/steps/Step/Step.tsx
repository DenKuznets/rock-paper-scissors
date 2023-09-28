import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    stepSx?: SxProps<Theme> | undefined;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
};

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Step2: React.FC<Props> = ({
    children,
    stepRef,
    handleTransitionEnd,
    stepSx,
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
                sx={stepSx}
                ref={stepRef}
                onTransitionEnd={(e) =>
                    handleTransitionEnd && handleTransitionEnd(e)
                }
            >
                {children}
            </Box>
        </FadeIn>
    );
};

export default Step2;
