import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

export const USER_PICK_TESTIDS = {
    USER_PICK_CONTAINER: "user-pick-container",
};

const UserPick = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    return (
        <Box data-testid={USER_PICK_TESTIDS.USER_PICK_CONTAINER} sx={{ ...sx }}>
            UserPick
        </Box>
    );
};

export default UserPick;
