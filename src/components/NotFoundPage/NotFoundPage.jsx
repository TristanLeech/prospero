import React from "react";
import {Link} from "react-router-dom";
import './NotFoundPage.css';

import tempestImg from '../../assets/tempest.png';

const NotFoundPage = () => {
    return (
        <div className="nfpContainer">
            <img src={tempestImg} alt="Tempest" className="nfpImage" />
            <h1>404 - Page Not Found</h1>
            <Link to={"/"}>
                <button>Go to Home</button>
            </Link>
        </div>
    );
    };

    export default NotFoundPage;