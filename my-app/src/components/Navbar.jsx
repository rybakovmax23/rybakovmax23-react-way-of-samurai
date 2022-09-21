import React from "react";
import navbar from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <ul className="nav-menu">
                <li className="nav-link">
                    <a href="#" className={`${navbar.link} ${navbar.active}`}>
                        Profile
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#" className={navbar.link}>
                        Messages
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#" className={navbar.link}>
                        News
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#" className={navbar.link}>
                        Music
                    </a>
                </li>
            </ul>
        </nav>
    )
}