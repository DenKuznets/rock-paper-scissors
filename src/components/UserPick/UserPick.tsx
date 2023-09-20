import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Choice from "../Choice/Choice";

export const USER_PICK_TESTIDS = {
    USER_PICK_CONTAINER: "user-pick-container",
    USER_PICK_TEXT: "user-pick-text",
};

const UserPick = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    const userChoice = useSelector((state: RootState) => state.app.userChoice);
    console.debug("userChoice", userChoice);
    return (
        <Box data-testid={USER_PICK_TESTIDS.USER_PICK_CONTAINER} sx={{ ...sx }}>
            <span data-testid={USER_PICK_TESTIDS.USER_PICK_TEXT}>
                YOU PICKED
            </span>
            {/* {typeof userChoice === "string" && <Choice role={userChoice} />} */}
            <Choice role={userChoice} />
        </Box>
    );
};

export default UserPick;
