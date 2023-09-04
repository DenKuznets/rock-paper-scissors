import { Box, BoxProps } from "@mui/material";
import Choice, { CHOICE_ROLES } from "../Choice/Choice";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUserChoice } from "../../app/appSlice";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
    CHOICE_SOCKET: "choice-socket",
    CHOOSE_CONNECTING_LINE: "choose-connecting-line",
};

const ChoiceSocket: React.FC<BoxProps> = (props) => {
    return (
        <Box
            data-testid={CHOOSE_TESTIDS.CHOICE_SOCKET}
            sx={{
                position: "absolute",
                height: 0,
                width: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bottom: props.bottom,
                top: props.top,
                right: props.right,
                left: props.left,
            }}
            onClick={props.onClick}
        >
            <Box sx={{ flex: "1 0 auto" }}>{props.children}</Box>
        </Box>
    );
};

const Choose = () => {
    const container = useRef<HTMLElement>();
    const dispatch = useDispatch();
    const handleChoiceClick = () => {
        if (container.current) {
            container.current.style.opacity = "0";
        }
        dispatch(
            setUserChoice({
                role: CHOICE_ROLES.CHOICE_PAPER,
                posX: 4,
                posY: 10,
            })
        );
    };
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
                <ChoiceSocket onClick={handleChoiceClick}>
                    <Choice role={CHOICE_ROLES.CHOICE_PAPER} />
                </ChoiceSocket>

                <ChoiceSocket
                    bottom={0}
                    left={"50%"}
                    onClick={handleChoiceClick}
                >
                    <Choice role={CHOICE_ROLES.CHOICE_ROCK} />
                </ChoiceSocket>

                <ChoiceSocket right={0} onClick={handleChoiceClick}>
                    <Choice role={CHOICE_ROLES.CHOICE_SCISSORS} />
                </ChoiceSocket>
            </Box>
        </Box>
    );
};

export default Choose;
