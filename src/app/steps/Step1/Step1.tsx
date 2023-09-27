import { ForwardedRef, TransitionEvent } from "react";
import ChoiceList from "../../../components/ChoiceList/ChoiceList";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
};

export const STEP1_TESTIDS = {
    STEP1_CONTAINER: "step1-container",
};

const stepSx = {
    mt: { xs: "6.5rem", md: "4rem" },
    opacity: "1",
    transition: "opacity 1s",
};
const Step1: React.FC<Props> = ({ stepRef, handleTransitionEnd }) => {
    return (
        <FadeIn>
            <Box
                data-testid={STEP1_TESTIDS.STEP1_CONTAINER}
                sx={stepSx}
                onTransitionEnd={(e) =>
                    handleTransitionEnd && handleTransitionEnd(e)
                }
                ref={stepRef}
            >
                <ChoiceList />
            </Box>
        </FadeIn>
    );
};

export default Step1;
