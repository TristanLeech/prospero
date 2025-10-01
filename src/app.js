import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// Global Components
import Navbar from "./components/navbar";

// Pages
import Home from "./Pages/Home";
import Splash from "./pages/splash/splash";

// Optional: Scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

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

                  {/* Fallback */}
                  <Route
                    path="*"
                    element={
                      <div style={{ padding: "2rem", textAlign: "center" }}>
                        Page Not Found
                      </div>
                    }
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