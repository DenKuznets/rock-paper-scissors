import { Box } from "@mui/material";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { SxProps, Theme } from "@mui/material/styles";
import Choice from "../Choice/Choice";
import Animation from "../Animation/Animation";

export const HOUSE_PICK_TESTIDS = {
    HOUSE_PICK_CONTAINER: "house-pick-container",
    HOUSE_PICK_TEXT: "house-pick-text",
    HOUSE_PICK_PLACEHOLDER: "house-pick-placeholder",
};

export enum HOUSE_OPTIONS {
    stub,
    animation,
    choice,
}

export interface HousePickType {
    sx?: SxProps<Theme> | undefined;
    view?: HOUSE_OPTIONS;
}

const HousePick: React.FC<HousePickType> = ({
    sx,
    view = HOUSE_OPTIONS.choice,
}) => {
    const houseChoice = useSelector(
        (state: RootState) => state.app.houseChoice
    );

    const toShow = () => {
        switch (view) {
            case HOUSE_OPTIONS.stub:
                return (
                    <Box
                        data-testid={HOUSE_PICK_TESTIDS.HOUSE_PICK_PLACEHOLDER}
                        sx={{
                            flex: "1 0 auto",
                            borderRadius: "50%",
                            width: { xs: "7rem", md: "9rem" },
                            height: { xs: "7rem", md: "9rem" },
                            backgroundColor: "rgba(0,0,0,0.2)",
                            margin: "0 auto",
                        }}
                    />
                );

            case HOUSE_OPTIONS.animation:
                return <Animation />;

            default:
                return (
                    <Choice
                        sx={{
                            scale: { md: "1.5" },
                            mt: { md: "6.7rem" },
                            margin: "0 auto",
                        }}
                        role={houseChoice as string}
                    />
                );
        }
    };

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

            {toShow()}
        </Box>
    );
};

export default HousePick;
