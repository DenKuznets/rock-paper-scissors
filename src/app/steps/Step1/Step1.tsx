import { ForwardedRef, TransitionEvent } from "react";
import ChoiceList from "../../../components/ChoiceList/ChoiceList";
import { Box } from "@mui/material";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
};

export const STEP1_TESTIDS = {
    STEP1_CONTAINER: "step1-container",
};

const Step1: React.FC<Props> = ({ stepRef, handleTransitionEnd }) => {
    return (
        <Box
            data-testid={STEP1_TESTIDS.STEP1_CONTAINER}
            sx={{
                mt: { xs: "4rem", md: "2rem" },
                opacity: "1",
                transition: "opacity 1s",
            }}
            onTransitionEnd={(e) =>
                handleTransitionEnd && handleTransitionEnd(e)
            }
            ref={stepRef}
        >
            <ChoiceList />
        </Box>
    );
};

export default Step1;
