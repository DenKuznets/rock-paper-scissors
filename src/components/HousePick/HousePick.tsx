import { Box } from "@mui/material";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { SxProps, Theme } from "@mui/material/styles";

export const HOUSE_PICK_TESTIDS = {
    HOUSE_PICK_CONTAINER: "house-pick-container",
    HOUSE_PICK_TEXT: "house-pick-text",
    HOUSE_PICK_PLACEHOLDER: "house-pick-palceholder",
};

const HousePick = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
    // <Box
    //     data-testid={CHOOSE_TESTIDS.CHOOSE_HOUSE_PICK_CONTAINER}
    //     sx={{
    //         display: "flex",
    //         opacity: 1,
    //         transition: "opacity 1s ease-in",
    //         height: 0,
    //         width: 0,
    //         position: "absolute",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         ...choicePos.houseChoice,
    //     }}
    // >
    //     <Box
    //         data-testid={CHOOSE_TESTIDS.CHOOSE_HOUSE_PICK_PLACEHOLDER}
    //         sx={{
    //             flex: "1 0 auto",
    //             borderRadius: "50%",
    //             width: { xs: "7rem", md: "9rem" },
    //             height: { xs: "7rem", md: "9rem" },
    //             backgroundColor: "rgba(0,0,0,0.2)",
    //         }}
    //     ></Box>
    // </Box>
    const houseChoice = useSelector(
        (state: RootState) => state.app.houseChoice
    );
    return (
        <Box
            data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_CONTAINER}
            sx={{
                position: "relative",
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
                }}
                data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_TEXT}
            >
                YOU PICKED
            </Box>
            {typeof houseChoice === "string" && (
                <Box
                    data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_PLACEHOLDER}
                    sx={{
                        flex: "1 0 auto",
                        borderRadius: "50%",
                        width: { xs: "7rem", md: "9rem" },
                        height: { xs: "7rem", md: "9rem" },
                        backgroundColor: "rgba(0,0,0,0.2)",
                    }}
                />
            )}
        </Box>
    );
};

export default HousePick;
