import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to={"/pages/month/month.jsx"}><a className="navbar-link">Calendar</a></Link>
            <Link to={"/"}><a className="navbar-logo">Prospero</a></Link>
            <Link to={"/pages/upcoming/upcoming.jsx"} ><a className="navbar-link">Upcoming</a></Link>
        </nav>
    );
}

export default Navbar;