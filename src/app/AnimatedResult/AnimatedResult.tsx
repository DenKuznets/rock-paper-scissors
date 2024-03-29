import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { playAgain, selectResult } from "../appSlice";
import { Box } from "@mui/material";
import { useGetStepSx } from "./sx";
import UserPick from "../../components/UserPick/UserPick";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { setScore } from "./utils";
import { PlayAgainBtn } from "../../components/CustomButton/CustomButton";

export const ANIMATED_RESULT_TESTIDS = {
    ANIMATED_RESULT_CONTAINER: "animated-result-container",
    ANIMATED_RESULT_PLAYAGAIN_CONTAINER: "animated-result-playagain-container",
    ANIMATED_RESULT_PLAYAGAIN_BTN: "animated-result-playagain-btn",
};

const AnimatedResult = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    const [showResult, setShowResult] = useState(false);
    const resultState = useAppSelector(selectResult);
    const dispatch = useAppDispatch();

    // animate house choice on mount
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        timeout = setTimeout(() => {
            setHousePickView(HOUSE_OPTIONS.animation);
            setTimeout(() => {
                setHousePickView(HOUSE_OPTIONS.choice);
                setTimeout(() => {
                    setShowResult(true);
                }, 500);
            }, 2000);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    // score нужно установить не раньше чем показать результат, что бы не спойлерить результат раньше времени
    useEffect(() => {
        if (showResult) setScore(resultState, dispatch);
    }, [resultState, showResult, dispatch]);

    return (
        <Box
            data-testid={ANIMATED_RESULT_TESTIDS.ANIMATED_RESULT_CONTAINER}
            sx={useGetStepSx(showResult)}
        >
            <FadeIn>
                <UserPick />
            </FadeIn>
            {showResult && (
                <FadeIn sx={{ width: { xs: 'unset', md: '100%' } }} duration={3}>
                    <Box
                        data-testid={
                            ANIMATED_RESULT_TESTIDS.ANIMATED_RESULT_PLAYAGAIN_CONTAINER
                        }
                        sx={{
                            width: { xs: "100%", md: "unset" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.2rem",
                            position: {
                                xs: "absolute",
                            },
                            left: "50%",
                            translate: "-50%",
                            marginTop: { xs: "14.5rem", md: "9.8rem" },
                        }}
                    >
                        <Result />
                        <PlayAgainBtn
                            testid={ANIMATED_RESULT_TESTIDS.ANIMATED_RESULT_PLAYAGAIN_BTN}
                            onClick={() => {
                                dispatch(playAgain());
                                setShowResult(false);
                            }}
                            text="play again"
                        />
                    </Box>
                </FadeIn>
            )}
            <FadeIn>
                <HousePick view={housePickView} />
            </FadeIn>
        </Box>
    );
};

export default AnimatedResult;
