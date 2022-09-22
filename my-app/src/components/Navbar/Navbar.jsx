import React from "react";
import navbar from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <ul className="nav-menu">
                <li className="nav-link">
                    <a href="/profile" className={`${navbar.link} ${navbar.active}`}>
                        Profile
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/dialogs" className={navbar.link}>
                        Messages
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/news" className={navbar.link}>
                        News
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/music" className={navbar.link}>
                        Music
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/settings" className={navbar.link}>
                       Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}