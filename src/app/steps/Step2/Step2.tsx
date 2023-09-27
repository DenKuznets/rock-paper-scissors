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
    maxWidth: {
        xs: "24rem",
        md: "41rem",
    },
    position: "relative",
};

const ChildrenLocal = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHousePickView(HOUSE_OPTIONS.animation);
            setTimeout(() => {
                setHousePickView(HOUSE_OPTIONS.choice);
            }, 2000);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <>
            <UserPick />
            <HousePick view={housePickView} />
        </>
    );
};

const Step2: React.FC<Props> = ({
    children = <ChildrenLocal />,
    stepRef,
    handleTransitionEnd,
}) => {
    useEffect(() => {
        if (handleTransitionEnd) {
            handleTransitionEnd();
        }
    }, []);

    return (
        <FadeIn>
            <Box
                data-testid={STEP2_TESTIDS.STEP2_CONTAINER}
                sx={stepSx}
                ref={stepRef}
            >
                {children}
            </Box>
        </FadeIn>
    );
};

export default Step2;
