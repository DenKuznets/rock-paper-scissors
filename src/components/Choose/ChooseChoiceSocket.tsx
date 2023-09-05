import { Box, BoxProps } from "@mui/material";
import { CHOOSE_TESTIDS } from "./Choose";

interface ChoiceSocketType extends BoxProps {
    coordsSet: {
        top: string;
        left: string;
        bottom: string;
        right: string;
    };
}

const ChooseChoiceSocket: React.FC<ChoiceSocketType> = (props) => {
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
                bottom: props.coordsSet.bottom,
                top: props.coordsSet.top,
                right: props.coordsSet.right,
                left: props.coordsSet.left,
                cursor: "pointer",
                transition: "top 1s, left 1s, right 1s, bottom 1s, transform 0.1s",
                ":hover": {
                    transform: "scale(1.05)",
                },
            }}
            onClick={props.onClick}
        >
            <Box sx={{ flex: "1 0 auto" }}>{props.children}</Box>
        </Box>
    );
};

export default ChooseChoiceSocket;
