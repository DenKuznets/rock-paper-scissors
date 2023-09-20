import { Box } from "@mui/material";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { SxProps, Theme } from "@mui/material/styles";
import Choice from "../Choice/Choice";

export const HOUSE_PICK_TESTIDS = {
    HOUSE_PICK_CONTAINER: "house-pick-container",
    HOUSE_PICK_TEXT: "house-pick-text",
    HOUSE_PICK_PLACEHOLDER: "house-pick-palceholder",
};

const HousePick = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    const houseChoice = useSelector(
        (state: RootState) => state.app.houseChoice
    );
    return (
        <Box
            data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_CONTAINER}
            sx={{
                position: "relative",
                minWidth: { xs: "9rem", md: "18.3rem" },
                ...sx,
                minHeight: { xs: "11rem", md: "unset" },
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
                    whiteSpace: "nowrap",
                }}
                data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_TEXT}
            >
                THE HOUSE PICKED
            </Box>
            {typeof houseChoice === "string" && (
                // НЕ УДАЛЯТЬ!
                // <Box
                //     data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_PLACEHOLDER}
                //     sx={{
                //         flex: "1 0 auto",
                //         borderRadius: "50%",
                //         width: { xs: "7rem", md: "9rem" },
                //         height: { xs: "7rem", md: "9rem" },
                //         backgroundColor: "rgba(0,0,0,0.2)",
                //     }}
                // />
                <Choice
                    sx={{
                        scale: { md: "1.5" },
                        mt: { md: "6.7rem" },
                        margin: "0 auto",
                    }}
                    role={houseChoice}
                />
            )}
        </Box>
    );
};

export default HousePick;
