import React from "react";
import './splash.css';
import { Link } from "react-router-dom";

function Splash() {
    return (
        <div className="splashPage">
            <div className="splashContainer">
                <img src={require('../../assets/waves.png')} alt="waves.png" className="splashImg" />
                <div>
                    <h1>Feeling Unbalanced?</h1>
                    <h2>We can help you find your balance.</h2>
                    <Link to="/pages/month/month.js" tabIndex={-1}>
                        <button className="splashButton">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Splash;