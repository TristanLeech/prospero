import React from "react";
import './app.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Global Components
import Navbar from './components/navbar/navbar.jsx';

// Pages
import Splash from './pages/splash/splash.jsx';
import Month from './pages/month/month.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import Signup from './pages/signup/signup.jsx';
import Login from './pages/login/login.jsx';
import Day from './pages/day/day.jsx';
import Upcoming from './pages/upcoming/upcoming.jsx';
import Todo from "./components/navbar/todo/todo.jsx";
import AddWindow from "./pages/addWindow/addWindow.jsx";

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
                  <Route path="/pages/month/month.jsx" element={<Month />} />
                  <Route path="/pages/signup/signup.jsx" element={<Signup />} />
                  <Route path="/pages/login/login.jsx" element={<Login />} />
                  <Route path="/pages/upcoming/upcoming.jsx" element={<Upcoming />} />
                  <Route path="/pages/day/day.jsx" element={<Day />} />
                  <Route path="/components/navbar/todo/todo.jsx" element={<Todo />} />
                  <Route path="/pages/addWindow/addWindow.js" element={<AddWindow />} />

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