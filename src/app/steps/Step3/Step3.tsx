import { ForwardedRef, useEffect, TransitionEvent } from "react";
import { Box } from "@mui/material";
import FadeIn from "../../../components/FadeIn";
import UserPick from "../../../components/UserPick/UserPick";
import { SxProps, Theme } from "@mui/material/styles";


import HousePick, {
    HOUSE_OPTIONS,
} from "../../../components/HousePick/HousePick";
import Result from "../../../components/Result/Result";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import { selectShowResult, setShowResult } from "../../appSlice";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    stepSx?: SxProps<Theme> | undefined;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
    handleOnMount?: () => void;
};

export const STEP3_TESTIDS = {
    STEP3_CONTAINER: "step3-container",
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
    },
    position: "relative",
    animationName: "width-change",
    animationDuration: "1s",
    animationFillMode: "forwards",
    "@keyframes width-change": {
        md: {
            "0%": {
                maxWidth: "41rem",
            },
            "100%": {
                maxWidth: "60rem",
            },
        },
    },
};

const ChildrenLocal = () => {
    const showResult = useAppSelector(selectShowResult);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setShowResult(true));
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
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
                    />
                </FadeIn>
            )}
            <HousePick view={HOUSE_OPTIONS.choice} />
        </>
    );
};

const Step3: React.FC<Props> = ({
    children = <ChildrenLocal />,
    stepRef,
    handleTransitionEnd,    
    handleOnMount,
}) => {
    useEffect(() => {
        if (handleOnMount) {
            handleOnMount();
        }
    }, [handleOnMount]);

    return (
        <Box
            data-testid={STEP3_TESTIDS.STEP3_CONTAINER}
            sx={stepSx}
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
