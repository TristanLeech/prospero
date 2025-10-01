import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/navbar.js';
//import App from './app';
import Splash from './pages/splash/splash.js';
import Month from './pages/month/month.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Month />
  </React.StrictMode>
);

