import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="home-link" to="/">
                <i className="fab fa-reddit nav-links"></i>
                <p className="nav-links">Reddit<span className="title-emphasis">Dark</span></p>
            </Link>
        </nav>
    )
}

export default Navbar;