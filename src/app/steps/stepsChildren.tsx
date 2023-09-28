import React, { useEffect, useState } from "react";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import UserPick from "../../components/UserPick/UserPick";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
    selectShowResult,
    selectShowStep1,
    selectShowStep2,
    selectShowStep3,
    setShowResult,
} from "../appSlice";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";

const useGetStepChildren = () => {
    const showStep1 = useAppSelector(selectShowStep1);
    const showStep2 = useAppSelector(selectShowStep2);
    const showStep3 = useAppSelector(selectShowStep3);
    switch (true) {
        case showStep1:
            return <ChoiceList />;
        case showStep2:
            return <Step2Child />;
        case showStep3:
            return <Step2Child />;
        default:
            return <div>default child</div>;
    }
};

export default useGetStepChildren;

const Step2Child = () => {
    const [housePickView, setHousePickView] = useState(HOUSE_OPTIONS.stub);
    const showResult = useAppSelector(selectShowResult);
    const dispatch = useAppDispatch();
    const showStep2 = useAppSelector(selectShowStep2);

    useEffect(() => {
        const timeout = setTimeout(() => {
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

        return () => {
            clearTimeout(timeout);
        };
    });

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
            <HousePick view={housePickView} />
        </>
    );
};
