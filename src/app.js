import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import styles from './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Global Components
import Navbar from './components/navbar/navbar.js';

// Pages
import Splash from './pages/splash/splash.js';
import Month from './pages/month/month.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

// Optional: Scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/navbar", element: <Navbar />},
  {path: "/splash", element: <Splash />},
  {path: "/month", element: <Month />},
  {path: "*", element: <NotFoundPage />}
]);

function AppInner() {
  return (
    <>
      <CssBaseline />
            <div className="App">
              <Navbar />
              <main>
                <Routes>
                  {/* General Routes */}
                  <Route path="/" element={<Splash />} />
                  <Route path="/pages/month/month.js" element={<Month />} />
                  {/* <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} /> */}

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