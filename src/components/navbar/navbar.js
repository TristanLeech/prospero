import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/about" className="navbar-link">Calendar</a>
            <a href="/" className="navbar-logo">Prospero</a>
            <a href="/contact" className="navbar-link">Sign In</a>
        </nav>
    );
}

export default Navbar;