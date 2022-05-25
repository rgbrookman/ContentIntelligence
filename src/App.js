import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import HomepageScreen from './screens/homepage/HomepageScreen';
import DashboardScreen from './screens/dashboard/dashboardScreen';
import LoginScreen from './screens/login/LoginScreen';
import CreatorScreen from './screens/creators/CreatorScreen';
import TestScreen from './screens/testcentre/testScreen';
import './App.css';
import './index.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPageScreen from './screens/landingpage/LandingPageScreen';

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPageScreen />} />
          <Route path="/home" element={<HomepageScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/creatornetwork" element={<CreatorScreen />} />
          <Route path="/testcentre" element={<TestScreen /> } />
        </Routes>
        <Footer />
      </Router>

  );
}
export default App;