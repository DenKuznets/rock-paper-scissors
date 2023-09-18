import { Roles } from "../../ts/roles";

const getRoleCss = (role: string) => {
    const RoleCss = {
        gradient: "",
        shadowColor: "",
        icon: "./images/",
    };

    switch (role) {
        case Roles.PAPER:
            RoleCss.gradient =
                "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            RoleCss.shadowColor =
                "hsl(229.65517241379308, 47.933884297520656%, 47.45098039215686%)";
            RoleCss.icon += "icon-paper.svg";

            break;
        case Roles.ROCK:
            RoleCss.gradient =
                "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            RoleCss.shadowColor =
                "hsl(348.94736842105266, 56.43564356435643%, 39.6078431372549%)";
            RoleCss.icon += "icon-rock.svg";

            break;
        case Roles.SCISSORS:
            RoleCss.gradient =
                "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            RoleCss.shadowColor =
                "hsl(40.12269938650307, 90.05524861878453%, 35.490196078431374%)";
            RoleCss.icon += "icon-scissors.svg";

            break;
    }

    return RoleCss;
};

export default getRoleCss;
