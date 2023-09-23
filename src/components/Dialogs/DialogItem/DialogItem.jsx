import style from "./dialogItem.module.css";

import { NavLink } from "react-router-dom";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink
            to={path}
            className={(item) => (item.isActive ? style.active : null)}
        >
            <li className={style.dialog}>{props.userName}</li>
        </NavLink>
    );
};
