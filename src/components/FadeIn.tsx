import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
    duration?: number;
    delay?: number;
    children: React.ReactNode;
    sx?: SxProps<Theme> | undefined;
};

export const FADEIN_TESTIDS = {
    FADEIN_CONTAINER: "fadein-container",
};

const FadeIn: React.FC<Props> = ({
    sx,
    duration = 1,
    delay = 10,
    children,
}) => {
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpacity(1);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Box
            data-testid={FADEIN_TESTIDS.FADEIN_CONTAINER}
            sx={{
                opacity: opacity,
                transitionProperty: "opacity",
                transitionDuration: `${duration}s`,
                width: "100%",
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default FadeIn;
