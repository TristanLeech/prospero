import React from "react";
import axios from 'axios';
import './login.css';
import { Link } from "react-router-dom";

function Login() {
  //   const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/user-login')
  //   .then((response) => {
  //     setUser(response.data);
  //   })
  //   .catch((error) => {
  //     console.error('the provided user does not exist')
  //   });
  // }, []);

  
    return (
        <div className="logPage">
            <img src={require('../../assets/crystalBall.png')} alt="crystalBall.png" className="ballPic" />
            <div className="logContainer">
                <h1>Log In</h1>
                <form className="logForm">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <Link to={"/pages/month/month.jsx"} tabIndex={-1}><button type="submit">Log In</button></Link>
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