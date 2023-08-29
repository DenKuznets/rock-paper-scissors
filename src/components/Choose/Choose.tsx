import { Box } from "@mui/material";
import Choice, { CHOICE_ROLES } from "../Choice/Choice";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
};

const Choose = () => {
    return (
        <Box data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}>
            <Choice role={CHOICE_ROLES.CHOICE_PAPER} />
        </Box>
    );
};

export default Choose;
