import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    sx?: SxProps<Theme> | undefined;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
};

export const STEP2_TESTIDS = {
    STEP2_CONTAINER: "step2-container",
};

const Step2: React.FC<Props> = ({
    children,
    stepRef,
    handleTransitionEnd,
    handleOnMount,
    sx,
}) => {
    useEffect(() => {
        if (handleOnMount) {
            handleOnMount();
        }
    }, [handleOnMount]);

    return (
        <FadeIn>
            <Box
                data-testid={STEP2_TESTIDS.STEP2_CONTAINER}
                sx={{...sx}}
                ref={stepRef}
            >
                {children}
            </Box>
        </FadeIn>
    );
};

export default Step2;
