import { Button } from "@mui/material";
import React, { FC } from "react";

export const SHOWRULES_TESTIDS = {
    SHOWRULES_CONTAINER: "showrules-container",
};

interface Props {
    onClick?: () => void;
}

const ShowRules: FC<Props> = ({ onClick }) => {
    return (
        <Button
            data-testid={SHOWRULES_TESTIDS.SHOWRULES_CONTAINER}
            sx={{
                position: "absolute",
                right: { xs: "50%", md: "2rem" },
                bottom: { xs: "3.4rem", md: "2rem" },
                translate: { xs: "50%", md: "unset" },
            }}
            variant="outlined"
            onClick={() => onClick && onClick()}
        >
            RULES
        </Button>
    );
};

export default ShowRules;
