import React from "react";
import './login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="logPage">
            <img src={require('../../assets/crystalBall.png')} alt="crystalBall.png" className="ballPic" />
            <div className="logContainer">
                <h1>Log In</h1>
                <form className="logForm">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <Link to={"/pages/month/month.js"} tabIndex={-1}><button type="submit">Log In</button></Link>
                </form>
                <div className="loginLink">
                    <p>Don't have an account yet?</p>
                    <Link to="/pages/signup/signup.js" tabIndex={-1}><button className="splashButton">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;