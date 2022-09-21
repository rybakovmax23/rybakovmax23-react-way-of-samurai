import React from "react";

export const Navbar=()=>{
    return (
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-link">
            <a href="#" className="link-anchor">
              Profile
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="link-anchor">
              Messages
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="link-anchor">
              News
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="link-anchor">
              Music
            </a>
          </li>
        </ul>
      </nav>
    )
}