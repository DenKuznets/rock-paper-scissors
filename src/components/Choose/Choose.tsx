import { Box, BoxProps } from "@mui/material";
import Choice, { CHOICE_ROLES } from "../Choice/Choice";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUserChoice } from "../../app/appSlice";
import CoordsSet from "../../ts/coordsSet";
import ChooseChoiceSocket from "./ChooseChoiceSocket";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
    CHOICE_SOCKET: "choice-socket",
    CHOOSE_CONNECTING_LINE: "choose-connecting-line",
};

const Choose = () => {
    const container = useRef<HTMLElement>();
    const handleChoiceClick = (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {};

    const sockets: JSX.Element[] = [];

    Object.keys(CHOICE_ROLES).forEach((role, index) => {
        let coordsSet;
        switch (index) {
            case 1:
                coordsSet = CoordsSet.topLeft;
                break;
            case 2:
                coordsSet = CoordsSet.topRight;
                break;
            default:
                coordsSet = CoordsSet.bottomMiddle;
                break;
        }
        sockets.push(
            <ChooseChoiceSocket
                data-testid={CHOOSE_TESTIDS.CHOICE_SOCKET}
                coordsSet={coordsSet}
                onClick={(e) => handleChoiceClick(e)}
                key={index}
            >
                <Choice role={role} />
            </ChooseChoiceSocket>
        );
    });

    return (
        <Box
            data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}
            sx={{
                opacity: 1,
                transition: "all 1s ease-in",
            }}
            ref={container}
        >
            <Box
                data-testid={CHOOSE_TESTIDS.CHOOSE_CONNECTING_LINE}
                sx={{
                    margin: "0 auto",
                    height: { xs: "9.7rem", md: "14.5rem" },
                    width: "100%",
                    minWidth: { xs: "11.1rem", md: "17.5rem" },
                    // outline:"1px solid red",
                    backgroundImage: `url("./images/bg-triangle.svg")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                {sockets}
            </Box>
        </Box>
    );
};

export default Choose;
