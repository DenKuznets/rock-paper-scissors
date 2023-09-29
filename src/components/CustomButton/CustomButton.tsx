import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

export const SHOWRULES_TESTIDS = {
    SHOWRULES_CONTAINER: "showrules-container",
};

interface CustomButtonProps extends ButtonProps {
    testid: string;
}

export const ShowRules: FC<CustomButtonProps> = ({ onClick, testid }) => {
    return (
        <Button
            data-testid={testid}
            sx={{
                fontSize: "1.075rem",
                position: "absolute",
                right: { xs: "50%", md: "2rem" },
                bottom: { xs: "2.8rem", md: "2rem" },
                translate: { xs: "50%", md: "unset" },
            }}
            variant="outlined"
            onClick={onClick}
        >
            RULES
        </Button>
    );
};
