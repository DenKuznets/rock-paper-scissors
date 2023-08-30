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
                    height: "9.7rem",
                    width: "11.1rem",
                    // outline: "1px solid red",
                    backgroundImage: `url("./images/bg-triangle.svg")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        // outline: "1px solid yellow",
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
                        // outline: "1px solid yellow",
                        position: "absolute",
                        height: 0,
                        width: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bottom: 0,
                        left: '50%',
                    }}
                >
                    <Box sx={{ flex: "1 0 auto" }}>
                        <Choice role={CHOICE_ROLES.CHOICE_ROCK} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        // outline: "1px solid yellow",
                        position: "absolute",
                        height: 0,
                        width: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        right:0,
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
