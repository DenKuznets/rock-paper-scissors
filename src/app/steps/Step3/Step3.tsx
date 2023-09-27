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

export const STEP2_TESTIDS = {
    STEP2_CONTAINER: "step2-container",
};

const stepSx = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    mt: { xs: "6.3rem", md: "4.1rem" },
    ml: "auto",
    mr: "auto",
    // minWidth: { xs375: "21rem" },
    maxWidth: {
        xs: "24rem",
        md: "41rem",
    },
    position: "relative",
    // gap: { xs: "3rem", md: "4rem" },
    transitionProperty: "all",
    transitionDuration: "1s",
};
const Step2: React.FC<Props> = ({ stepRef, handleTransitionEnd }) => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);

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
                data-testid={STEP2_TESTIDS.STEP2_CONTAINER}
                sx={stepSx}
                ref={stepRef}
            >
                <UserPick />
                <HousePick view={housePickView} />
            </Box>
        </FadeIn>
    );
};

export default Step2;
