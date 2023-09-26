import React, { useEffect, useState } from "react";

type Props = {
    duration?: number;
    delay?: number;
    children: React.ReactNode;
};

export const FADEIN_TESTIDS = {
    FADEIN_CONTAINER: "fadein-container",
};

const FadeIn: React.FC<Props> = ({ duration = 1, delay = 10, children }) => {
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
        <div
            data-testid={FADEIN_TESTIDS.FADEIN_CONTAINER}
            style={{
                opacity: opacity,
                transitionProperty: "opacity",
                transitionDuration: `${duration}s`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
