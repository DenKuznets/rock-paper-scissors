import { Box } from "@mui/material";
import Choice, { CHOICE_ROLES } from "../Choice/Choice";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
    CHOOSE_CONNECTING_LINE: "choose-connecting-line",
};

const Choose = () => {
    return (
        <Box data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}>
            <Box
                data-testid={CHOOSE_TESTIDS.CHOOSE_CONNECTING_LINE}
                sx={{
                    margin: "0 auto",
                    height: { xs: "9.7rem", md: "14.5rem" },
                    width: "100%",
                    // maxWidth: { xs: "11.1rem", md: "15rem" },
                    minWidth: { xs: "11.1rem", md: "17.5rem" },
                    outline:"1px solid red",
                    backgroundImage: `url("./images/bg-triangle.svg")`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        height: 0,
                        width: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ flex: "1 0 auto" }}>
                        <Choice role={CHOICE_ROLES.CHOICE_PAPER} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        height: 0,
                        width: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bottom: 0,
                        left: "50%",
                    }}
                >
                    <Box sx={{ flex: "1 0 auto" }}>
                        <Choice role={CHOICE_ROLES.CHOICE_ROCK} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        height: 0,
                        width: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        right: 0,
                    }}
                >
                    <Box sx={{ flex: "1 0 auto" }}>
                        <Choice role={CHOICE_ROLES.CHOICE_SCISSORS} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Choose;
