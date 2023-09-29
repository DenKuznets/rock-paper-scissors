import { useDispatch } from "react-redux";
import { selectUserChoice, setUserChoice } from "../../app/appSlice";
import { Box, BoxProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { Roles } from "../../ts/roles";
import Choice from "../Choice/Choice";
import { useAppSelector } from "../../app/reduxHooks";
import { ForwardedRef, FC, useState } from "react";

const choicePos = [
    {
        top: "0",
        left: "0",
    },
    {
        top: "0",
        right: "0",
    },
    {
        bottom: "0",
        right: "50%",
        transform: "translate(50%)",
    },
];

export interface ChoiceListProps extends BoxProps {
    sx?: SxProps<Theme> | undefined;
    choiceListRef?: ForwardedRef<HTMLDivElement>;
}

export const CHOICE_LIST_TESTIDS = {
    CHOICE_LIST_CONTAINER: "choice-list-container",
};

const ChoiceList: FC<ChoiceListProps> = ({ sx, choiceListRef }) => {
    const [choiceRole, setChoiceRole] = useState<string | null>(null);
    const userChoice = useAppSelector(selectUserChoice);
    const dispatch = useDispatch();
    const choiceList = Object.keys(Roles).map((role, index) => {
        const choiceCoords = choicePos[index];
        return (
            <Choice
                sx={{
                    ...choiceCoords,
                    position: "absolute",
                    cursor: "pointer",
                    transition: "scale 0.1s",
                    ":hover": {
                        scale: "1.05",
                    },
                }}
                key={role}
                role={role}
                //only set userChoice on the first click
                onClick={() => {
                    setChoiceRole(role);
                }}
            />
        );
    });

    return (
        <Box
            ref={choiceListRef}
            data-testid={CHOICE_LIST_TESTIDS.CHOICE_LIST_CONTAINER}
            sx={{
                opacity: choiceRole ? 0 : 1,
                transition: "opacity 1s",
                backgroundImage: `url("./images/bg-triangle.svg")`,
                backgroundSize: "65%",
                backgroundRepeat: "no-repeat",
                position: "relative",
                backgroundPosition: "center",
                width: "100%",
                maxWidth: { xs: "18.8rem", md: "29.5rem" },
                minWidth: "16.5rem",
                minHeight: { xs: "17.3rem", md: "26rem" },
                margin: "0 auto",
                mt: { xs: "6.5rem", md: "4rem" },
                ...sx,
            }}
            onTransitionEnd={(e) => {
                if (
                    e.target instanceof HTMLDivElement &&
                    e.target.getAttribute("data-testid") ===
                        CHOICE_LIST_TESTIDS.CHOICE_LIST_CONTAINER
                ) {
                    !userChoice && dispatch(setUserChoice(choiceRole));
                }
            }}
        >
            {choiceList}
        </Box>
    );
};

export default ChoiceList;
