import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import { NavMobile } from './components/navBar';
import Login from './pages/login';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {isLandingPage && <Header includeTitle={true} />}
      <Routes>
        <Route path="/" element={<></>} /> {/* Empty route for landing page */}
        <Route path="/login" element={<Login />} />
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
