import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/landingPage';
import { NavMobile } from './components/navBar';
import Login from './pages/login';
import Signup from './pages/signup';
import Creative from './pages/signup/creative'
import Buyer from './pages/signup/buyer'

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {isLandingPage && <Header includeTitle={true} />}
      <Routes>
        <Route path="/" element={<></>} /> {/* Empty route for landing page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/creative" element={<Creative />} />
        <Route path="/signup/buyer" element={<Buyer />} />
        {/* Add other routes here */}
      </Routes>
      <NavMobile />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;
