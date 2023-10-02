import { Box } from "@mui/material";
import Choice from "../Choice/Choice";
import { Roles } from "../../ts/roles";
import { FC, useEffect, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export const ANIMATION_TESTIDS = {
    ANIMATION_CONTAINER: "animation-container",
};

export interface Props {
    sx?: SxProps<Theme> | undefined;
}

const ChoiceAnimation: FC<Props> = ({ sx }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev < 2) return prev + 1;
                else return 0;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ ...sx }} data-testid={ANIMATION_TESTIDS.ANIMATION_CONTAINER}>
            <Choice
                sx={{ margin: "0 auto" }}
                role={Object.values(Roles)[index]}
            />
        </Box>
    );
};

export default ChoiceAnimation;
