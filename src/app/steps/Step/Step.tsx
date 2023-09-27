import { ForwardedRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import UserPick from "../../../components/UserPick/UserPick";
import HousePick, {
    HOUSE_OPTIONS,
} from "../../../components/HousePick/HousePick";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: () => void;
};

export const STEP_TESTIDS = {
    STEP_CONTAINER: "step-container",
};

const Step2: React.FC<Props> = ({ stepRef, handleTransitionEnd, children }) => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);

    // on mount behavior
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHousePickView(HOUSE_OPTIONS.animation);
            setTimeout(() => {
                setHousePickView(HOUSE_OPTIONS.choice);
                if (handleTransitionEnd) {
                    handleTransitionEnd();
                }
            }, 2000);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <FadeIn>
            <Box
                data-testid={STEP_TESTIDS.STEP_CONTAINER}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    mt: { xs: "6.3rem", md: "4.1rem" },
                    ml: "auto",
                    mr: "auto",
                    maxWidth: {
                        xs: "24rem",
                        md: "41rem",
                    },
                    position: "relative",
                    transitionProperty: "all",
                    transitionDuration: "1s",
                }}
            >
                <UserPick />
                <HousePick view={housePickView} />
            </Box>
        </FadeIn>
    );
};

export default Step2;
