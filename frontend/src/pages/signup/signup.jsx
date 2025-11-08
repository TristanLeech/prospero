import React, { useState } from "react";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import User from "../../components/user.js";


function Signup() {
    // State variables for Email, password, and error message
    const [userName, setUserName] = useState('');
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

            // Send signUp request to server
            const response = await axios.post('http://localhost:5050/prospero/user-sign-up', { userName, email, password });

            // If signUp successful, redirect to MainPage
            if (response.status === 200) {
                User.setId(response.user.Id);
                navigate('/pages/month/month.jsx');
            }
        } catch (error) {
            console.error('Error:', error);

            // If signUp failed, display error message
            setErrorMessage('Your user cannot be created.');
        }
    };


    return (
        <div className="signPage">
            <img src={require('../../assets/windyLeaf.png')} alt="windyLeaf.png" className="leafImg" />
            <div className="signContainer">
                <h1>Sign Up</h1>
                <form className="signForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value= {userName} onChange={(e) => setUserName(e.target.value)} required />
                    <input type="email" placeholder="Email" value= {email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value= {password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Register</button>
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