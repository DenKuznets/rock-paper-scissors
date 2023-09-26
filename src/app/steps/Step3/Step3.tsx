import { ForwardedRef, TransitionEvent, useEffect, useState } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import UserPick from "../../../components/UserPick/UserPick";

import HousePick, {
    HOUSE_OPTIONS,
} from "../../../components/HousePick/HousePick";
import Result from "../../../components/Result/Result";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: () => void;
};

export const STEP3_TESTIDS = {
    STEP3_CONTAINER: "step3-container",
};

const Step3: React.FC<Props> = ({ stepRef, handleTransitionEnd }) => {
    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowResult(true);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Box
            data-testid={STEP3_TESTIDS.STEP3_CONTAINER}
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: { xs: "6.3rem", md: "4.1rem" },
                ml: "auto",
                mr: "auto",
                minWidth: { xs375: "21rem" },
                maxWidth: {
                    xs: "24rem",
                    md: "100%",
                },
                position: "relative",
                gap: { xs: "3rem", md: "4rem" },
                transitionProperty: "all",
                transitionDuration: "1s",
            }}
        >
            <UserPick />
            {showResult && (
                <FadeIn duration={3}>
                    <Result
                        sx={{
                            marginTop: { xs: "14.5rem", md: "7.6rem" },
                        }}
                    />
                </FadeIn>
            )}
            <HousePick view={HOUSE_OPTIONS.choice} />
        </Box>
    );
};

export default Step3;
