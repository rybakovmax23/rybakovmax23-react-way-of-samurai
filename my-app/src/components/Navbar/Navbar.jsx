import React from "react";
import { NavLink } from "react-router-dom";
import navbar from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <ul className="nav-menu">
                <li className="nav-link">
                    <NavLink to="/profile" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        Profile
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/dialogs" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        Messages
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/news" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        News
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/music" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        Music
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/settings" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        Settings
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/users" className={navData => navData.isActive ? navbar.active : navbar.link}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}