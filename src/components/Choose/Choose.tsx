import { Box } from "@mui/material";
import Choice from "../Choice/Choice";
import { Roles } from "../../ts/roles";
import { useState } from "react";

export const CHOOSE_TESTIDS = {
    CHOOSE_CONTAINER: "choose-container",
};

const Choose = () => {
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const sockets = Object.keys(Roles)
        .filter((role) => {
            return userChoice ? role === userChoice : role;
        })
        .map((role) => {
            return (
                <Choice
                    onClick={(choiceRole) => setUserChoice(choiceRole)}
                    key={role}
                    role={role}
                    userChoice={userChoice}
                />
            );
        });

    return (
        <Box>
            <Box
                data-testid={CHOOSE_TESTIDS.CHOOSE_CONTAINER}
                sx={{
                    opacity: 1,
                    transition: "all 1s ease-in",
                    // backgroundColor: "white",
                    margin: "0 auto",
                    width: "100%",
                    height: {
                        xs: "9.7rem",
                        md: userChoice ? "19.4rem" : "14.5rem",
                    },
                    minWidth: {
                        xs: "11.1rem",
                        md: userChoice ? "23.8rem" : "17.5rem",
                    },
                    outline: "1px solid red",
                    backgroundImage: userChoice
                        ? ""
                        : `url("./images/bg-triangle.svg")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    backgroundPosition: "center",
                }}
            >
                {sockets}
            </Box>
            <Box sx={{
                display: 'flex',
                textTransform:"uppercase",
            }}>
                <Box>you picked</Box>
                <Box>the house picked</Box>
            </Box>
        </Box>
    );
};

export default Choose;
