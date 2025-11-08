import React, { useState } from "react";
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import User from "../../components/user.js";

function Login() {
  // State variables for Email, password, and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Clear previous error messages
            setErrorMessage('');

            // Send login request to server
            const response = await axios.post('/prospero/user-login', { email, password });

            // If login successful, redirect to MainPage
            if (response.status === 200) {
                User.setId(response.user.Id);
                navigate('/pages/month/month.jsx');
            }
        } catch (error) {
            console.error('Error:', error);

            // If login failed, display error message
            setErrorMessage('Your Email and\nPassword are incorrect.');
        }
    };

  
    return (
        <div className="logPage">
            <img src={require('../../assets/crystalBall.png')} alt="crystalBall.png" className="ballPic" />
            <div className="logContainer">
                <h1>Log In</h1>
                <form className="logForm" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value= {email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value= {password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Log In</button>
                </form>
                <div className="loginLink">
                    <p>Don't have an account yet?</p>
                    <Link to="/pages/signup/signup.jsx" tabIndex={-1}><button className="splashButton">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;