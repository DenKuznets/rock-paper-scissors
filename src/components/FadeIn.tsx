import React, { useEffect, useRef } from "react";

type Props = {
    duration?: number;
    children: React.ReactNode;
};

const FadeIn: React.FC<Props> = ({ duration = 1, children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (containerRef.current) containerRef.current.style.opacity = "1";
    }, []);

    return (
        <div
            style={{ opacity: 0, transition: `opacity ${duration}s` }}
            ref={containerRef}
        >
            {children}
        </div>
    );
};

export default FadeIn;
