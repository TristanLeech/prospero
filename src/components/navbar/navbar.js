import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to={"/pages/month/month.js"}><a className="navbar-link">Calendar</a></Link>
            <Link to={"/"}><a className="navbar-logo">Prospero</a></Link>
            <Link to={"/pages/signup/signup.js"} ><a className="navbar-link">Sign Up</a></Link>
        </nav>
    );
}

export default Navbar;