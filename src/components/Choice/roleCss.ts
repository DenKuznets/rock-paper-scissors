import coords from "../../ts/coords";
import { Roles } from "../../ts/roles";

const getRoleCss = (role: string) => {
    const RoleCss = {
        gradient: "",
        shadowColor: "",
        icon: "./images/",
        initialTop: "",
        initialLeft: "",
        initialBottom: "",
        initialRight: "",
    };

    switch (role) {
        case Roles.PAPER:
            RoleCss.gradient =
                "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            RoleCss.shadowColor =
                "hsl(229.65517241379308, 47.933884297520656%, 47.45098039215686%)";
            RoleCss.icon += "icon-paper.svg";
            RoleCss.initialTop = coords.topLeft.top;
            RoleCss.initialLeft = coords.topLeft.left;
            RoleCss.initialBottom = coords.topLeft.bottom;
            RoleCss.initialRight = coords.topLeft.right;
            break;
        case Roles.ROCK:
            RoleCss.gradient =
                "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            RoleCss.shadowColor =
                "hsl(348.94736842105266, 56.43564356435643%, 39.6078431372549%)";
            RoleCss.icon += "icon-rock.svg";
            RoleCss.initialTop = coords.topRight.top;
            RoleCss.initialLeft = coords.topRight.left;
            RoleCss.initialBottom = coords.topRight.bottom;
            RoleCss.initialRight = coords.topRight.right;
            break;
        case Roles.SCISSORS:
            RoleCss.gradient =
                "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            RoleCss.shadowColor =
                "hsl(40.12269938650307, 90.05524861878453%, 35.490196078431374%)";
            RoleCss.icon += "icon-scissors.svg";
            RoleCss.initialTop = coords.bottomMiddle.top;
            RoleCss.initialLeft = coords.bottomMiddle.left;
            RoleCss.initialBottom = coords.bottomMiddle.bottom;
            RoleCss.initialRight = coords.bottomMiddle.right;
            break;
    }

    return RoleCss;
};

export default getRoleCss;
