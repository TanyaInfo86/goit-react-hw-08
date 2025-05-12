import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const setActiveClass = ({ isActive }) => {
        return clsx(style.link, isActive && style.active);
    };

    return (
        <nav className={style.section}>
            <NavLink to="/" className={setActiveClass}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={setActiveClass}>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;