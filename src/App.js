import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import LogOut from './components/pages/LogOut';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Certificates from './components/pages/Certificates';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
