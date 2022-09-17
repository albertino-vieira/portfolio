import { NavLink } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return <nav className="nav">
        <NavLink className="nav-link" to="/">
            <p>Home</p>
        </NavLink>
        <NavLink className="nav-link" to="" >
            <p>About</p>
        </NavLink>
        <NavLink className="nav-link" to="">
            <p>Projects</p>
        </NavLink>
        <NavLink className="nav-link" to="/contact">
            <p>Contact Me</p>
        </NavLink>
    </nav >
}

export default NavBar;