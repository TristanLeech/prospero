import React from "react";
import {Link} from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="nfpContainer">
            <img src="../../assets/tempest.png"></img>
            <h1>404 - Page Not Found</h1>
            <Link to={"/"}>
                <button>Go to Home</button>
            </Link>
        </div>
    );
    };

    export default NotFoundPage;