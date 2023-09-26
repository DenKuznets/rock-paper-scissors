import { ForwardedRef, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import UserPick from "../../../components/UserPick/UserPick";
import { useAppSelector } from "../../reduxHooks";
import { selectHouseChoice } from "../../appSlice";
import HousePick from "../../../components/HousePick/HousePick";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
};

export const STEP2_TESTIDS = {
    STEP2_CONTAINER: "step2-container",
};

const Step2: React.FC<Props> = ({ stepRef, handleTransitionEnd }) => {
    const houseChoiceState = useAppSelector(selectHouseChoice);

    return (
        <FadeIn>
            <Box
                data-testid={STEP2_TESTIDS.STEP2_CONTAINER}
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
                }}
            >
                <UserPick />

                {houseChoiceState && <HousePick stub />}
            </Box>
        </FadeIn>
    );
};

export default Step2;
