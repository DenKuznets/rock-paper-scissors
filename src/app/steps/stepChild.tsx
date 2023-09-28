import React, { useEffect, useState } from "react";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import UserPick from "../../components/UserPick/UserPick";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowResult,
    selectShowStep1,
    selectShowStep2,
    setShowResult,
} from "../appSlice";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";

export const StepChild = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    const showResult = useAppSelector(selectShowResult);
    const dispatch = useAppDispatch();
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showStep2) {
            timeout = setTimeout(() => {
                if (showStep2) {
                    setHousePickView(HOUSE_OPTIONS.animation);
                }
                setTimeout(() => {
                    setHousePickView(HOUSE_OPTIONS.choice);
                    setTimeout(() => {
                        dispatch(setShowResult(true));
                    }, 500);
                }, 2000);
            }, 1000);
        }

        return () => {
            clearTimeout(timeout);
        };
    });

    return showStep1 ? (
        <ChoiceList />
    ) : (
        <>
            <UserPick />
            {showResult && (
                <FadeIn duration={3}>
                    <Result
                        sx={{
                            position: {
                                xs: "absolute",
                            },
                            left: "50%",
                            translate: "-50%",
                            marginTop: { xs: "14.5rem", md: "9.8rem" },
                        }}
                    />
                </FadeIn>
            )}
            <HousePick view={housePickView} />
        </>
    );
};
