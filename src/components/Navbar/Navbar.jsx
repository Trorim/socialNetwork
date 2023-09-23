import style from "./navbar.module.css";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <aside className={style.navMenu}>
            <ul className={style.list}>
                <NavLink
                    to="/profile"
                    className={(item) =>
                        item.isActive ? style.active : style.item
                    }
                >
                    <li>Profile</li>
                </NavLink>
                <NavLink
                    to="/dialogs"
                    className={(item) =>
                        item.isActive ? style.active : style.item
                    }
                >
                    <li>Dialogs</li>
                </NavLink>
                <NavLink
                    to="/news"
                    className={(item) =>
                        item.isActive ? style.active : style.item
                    }
                >
                    <li>News</li>
                </NavLink>
                <NavLink
                    to="/music"
                    className={(item) =>
                        item.isActive ? style.active : style.item
                    }
                >
                    <li>Music</li>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={(item) =>
                        item.isActive ? style.active : style.item
                    }
                >
                    <li>Settings</li>
                </NavLink>
            </ul>
        </aside>
    );
};
