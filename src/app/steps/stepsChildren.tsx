import React, { useEffect, useState } from "react";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import UserPick from "../../components/UserPick/UserPick";
import HousePick, { HOUSE_OPTIONS } from "../../components/HousePick/HousePick";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { selectShowResult, setShowResult } from "../appSlice";
import FadeIn from "../../components/FadeIn";
import Result from "../../components/Result/Result";
import { steps } from "./Step/Step";


const getChildren = (step: steps) => {
    switch (step) {
        case steps.one:
            return <ChoiceList />;
        case 2:
            return <Step2Child />;
        case 3:
            return <Step3Child />;
        default:
            return <div>default child</div>
    }
};

export default getChildren;

const Step2Child = () => {
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

const Step3Child = () => {
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