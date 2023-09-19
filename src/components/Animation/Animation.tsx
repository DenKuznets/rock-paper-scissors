import { Box } from "@mui/material";
import Choice from "../Choice/Choice";
import { Roles } from "../../ts/roles";
import { useEffect, useState } from "react";

export const ANIMATION_TESTIDS = {
    ANIMATION_CONTAINER: "animation-container",
};

const Animation = () => {
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
        <Box data-testid={ANIMATION_TESTIDS.ANIMATION_CONTAINER}>
            <Choice role={Object.values(Roles)[index]} />
        </Box>
    );
};

export default Animation;
