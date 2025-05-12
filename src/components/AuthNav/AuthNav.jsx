import { NavLink } from "react-router-dom";
import style from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={style.nav}>
            <NavLink to="/register" className={style.link}>Register</NavLink>
            <p className={style.link}>|</p>
            <NavLink to="/login" className={style.link}>Log In</NavLink>
        </div>
    )
}

export default AuthNav;