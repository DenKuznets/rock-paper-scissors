import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    sx?: SxProps<Theme> | undefined;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
};

export const STEP3_TESTIDS = {
    STEP3_CONTAINER: "step3-container",
};

const Step3: React.FC<Props> = ({
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
        <Box
            data-testid={STEP3_TESTIDS.STEP3_CONTAINER}
            sx={{ ...sx }}
            ref={stepRef}
            onTransitionEnd={(e) =>
                handleTransitionEnd && handleTransitionEnd(e)
            }
        >
            {children}
        </Box>
    );
};

export default Step3;
