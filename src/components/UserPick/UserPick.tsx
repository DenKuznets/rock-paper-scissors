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
    return (
        <Box
            data-testid={USER_PICK_TESTIDS.USER_PICK_CONTAINER}
            sx={{
                position: "relative",
                minWidth: { xs: "8.2rem", md: "18.3rem" },
                minHeight: { xs: "11rem", md: "unset" },
                ...sx,
            }}
        >
            <Box
                sx={{
                    fontSize: { xs: "0.93rem", md: "1.6rem" },
                    letterSpacing: "2px",
                    textAlign: "center",
                    position: { xs: "absolute", md: "static" },
                    bottom: "0",
                    width: "100%",
                }}
                data-testid={USER_PICK_TESTIDS.USER_PICK_TEXT}
            >
                YOU PICKED
            </Box>
            {typeof userChoice === "string" && (
                <Choice
                    sx={{
                        scale: { md: "1.5" },
                        mt: { md: "6.7rem" },
                        margin: "0 auto",
                    }}
                    role={userChoice}
                />
            )}
        </Box>
    );
};

export default UserPick;
