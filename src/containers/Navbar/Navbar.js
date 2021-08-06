import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <i className="fab fa-reddit nav-links"></i>
            <p className="nav-links" id="site-title">Reddit<span className="title-emphasis">Dark</span></p>
        </nav>
    )
}

export default Navbar;