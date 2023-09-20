import { Box } from "@mui/material";
import { Roles } from "../../ts/roles";
import getRoleCss from "./roleCss";
import { SxProps, Theme } from "@mui/material/styles";

export const CHOICE_TESTIDS = (role: string) => {
    return {
        CHOICE_CONTAINER: `${role.toLowerCase()}-choice-container`,
        CHOICE_COLORED_BORDER: `${role.toLowerCase()}-choice-colored-border`,
        CHOICE_IMAGE: `${role.toLowerCase()}-choice-image`,
        CHOICE_IMAGE_BACKGROUND: `${role.toLowerCase()}-choice-image-background`,
    };
};

const Choice = ({
    role = Roles.PAPER,
    sx,
    onClick,
}: {
    role: string;
    sx?: SxProps<Theme> | undefined;
    onClick?: () => void;
}) => {
    const roleCss = getRoleCss(role);
    const size = { xs: "8rem", md: "12rem" };
    return (
        <Box
            data-testid={CHOICE_TESTIDS(role).CHOICE_CONTAINER}
            sx={{
                // outline:"1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "1 0 auto",
                width: size,
                ...sx,
            }}
            onClick={onClick}
        >
            <Box
                data-testid={CHOICE_TESTIDS(role).CHOICE_COLORED_BORDER}
                sx={{
                    flex: "1 0 auto",
                    background: roleCss.gradient,
                    height: size,
                    width: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: {
                        xs: `0 7px 2px 0px ${roleCss.shadowColor}`,
                        md: `0 11px 2px 0px ${roleCss.shadowColor}`,
                    },
                    filter: "drop-shadow(0px 0px 3px black)",
                }}
            >
                <Box
                    data-testid={CHOICE_TESTIDS(role).CHOICE_IMAGE_BACKGROUND}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { xs: "6rem", md: "9.5rem" },
                        width: { xs: "6rem", md: "9.5rem" },
                        borderRadius: "50%",
                        backgroundColor: "white",
                        boxShadow: {
                            xs: "inset 0px 5px 2px rgba(0,0,0,0.2)",
                            md: "inset 0px 9px 3px rgba(0,0,0,0.2)",
                        },
                    }}
                >
                    <img
                        data-testid={CHOICE_TESTIDS(role).CHOICE_IMAGE}
                        src={roleCss.icon}
                        alt={role}
                        height="auto"
                        width="45%"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Choice;
