import { ForwardedRef, TransitionEvent } from "react";
import ChoiceList from "../../../components/ChoiceList/ChoiceList";
import { Box } from "@mui/material";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
};

const Step1: React.FC<Props> = ({ stepRef: ref, handleTransitionEnd }) => {
    return (
        <Box
            sx={{ mt: { xs: "4rem", md: "2rem" } }}
            onTransitionEnd={(e) =>
                handleTransitionEnd && handleTransitionEnd(e)
            }
            ref={ref}
        >
            <ChoiceList />
        </Box>
    );
};

export default Step1;
