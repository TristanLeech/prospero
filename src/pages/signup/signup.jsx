import React from "react";
import './signup.css';
import { Link } from "react-router-dom";



function Signup() {
    return (
        <div className="signPage">
            <img src={require('../../assets/windyLeaf.png')} alt="windyLeaf.png" className="leafImg" />
            <div className="signContainer">
                <h1>Sign Up</h1>
                <form className="signForm">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <Link tabIndex={-1}><button type="submit">Register</button></Link>
                </form>
                <div className="loginLink">
                    <p>Already have an account? </p>
                    <Link to="/pages/login/login.jsx" tabIndex={-1}><button className="splashButton">Login here</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;