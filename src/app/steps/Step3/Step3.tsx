import { ForwardedRef, useEffect, useState } from "react";
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
    playAgain: () => void;
};

export const STEP3_TESTIDS = {
    STEP3_CONTAINER: "step3-container",
};

const Step3: React.FC<Props> = ({ playAgain, stepRef }) => {
    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowResult(true);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Box
            data-testid={STEP3_TESTIDS.STEP3_CONTAINER}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: { xs: "6.3rem", md: "4.1rem" },
                ml: "auto",
                mr: "auto",
                maxWidth: {
                    xs: "24rem",
                    md: showResult ? "60rem" : "41rem",
                },
                position: "relative",
                transitionProperty: "all",
                transitionDuration: "1s",
            }}
            ref={stepRef}
        >
            <UserPick />
            {showResult && (
                <FadeIn duration={3}>
                    <Result
                        sx={{
                            position: {
                                xs: "absolute",
                                // md: "relative",
                            },
                            left: "50%",
                            translate: "-50%",
                            marginTop: { xs: "14.5rem", md: "9.8rem" },
                        }}
                        playAgain={playAgain}
                    />
                </FadeIn>
            )}
            <HousePick view={HOUSE_OPTIONS.choice} />
        </Box>
    );
};

export default Step3;
