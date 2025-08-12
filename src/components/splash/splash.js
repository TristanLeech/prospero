import React from "react";
import './splash.css';

function Splash() {
    return (
        <div className="splashContainer">
            <img src={require('../../assets/waves.png')} alt="waves.png" className="splashImg" />
            <div>
                <h1>Feeling Unbalanced?</h1>
                <h2>We can help you find your balance.</h2>
                <a href="/month">
                    <button className="splashButton">Get Started</button>
                </a>
            </div>
        </div>
    );
}

export default Splash;