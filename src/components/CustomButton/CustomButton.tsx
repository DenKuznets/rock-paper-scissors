import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";
import { colors } from "../../ts/theme";

interface CustomButtonProps extends ButtonProps {
    testid: string;
    text?: string;
}

export const ShowRulesBtn: FC<CustomButtonProps> = ({
    onClick,
    testid,
    text,
}) => {
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
            {text}
        </Button>
    );
};

export const PlayAgainBtn: FC<CustomButtonProps> = ({
    onClick,
    testid,
    text,
}) => {
    return (
        <Button
            data-testid={testid}
            sx={{
                color: colors.darkText,
                padding: "0.67rem 3.9rem",
                fontSize: "1.05rem",
                fontWeight: "800",
                ":hover": {
                    backgroundColor: "#fff",
                    color: "red",
                },
                backgroundColor: "#fff",
            }}
            variant="outlined"
            onClick={onClick}
        >
            {text}
        </Button>
    );
};
