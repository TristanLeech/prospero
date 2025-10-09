import React from "react";
import './app.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// Global Components
import Navbar from './components/navbar/navbar.js';

// Pages
import Splash from './pages/splash/splash.js';
import Month from './pages/month/month.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';
import Signup from './pages/signup/signup.js';
import Login from './pages/login/login.js';

// Optional: Scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
            <div className="App">
              <Navbar />
              <main>
                <Routes>
                  {/* General Routes */}
                  <Route path="/" element={<Splash />} />
                  <Route path="/pages/month/month.js" element={<Month />} />
                  <Route path="/pages/signup/signup.js" element={<Signup />} />
                  <Route path="/pages/login/login.js" element={<Login />} />
                  {/* <Route path="/contact" element={<ContactPage />} /> */}

                  {/* Fallback */}
                  <Route
                    path="*"
                    element={<NotFoundPage />}
                  />
                </Routes>
              </main>
            </div>
    </>
  );
}

// Put ScrollToTop inside Router context
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppInner />
    </Router>
  );
}