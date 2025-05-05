// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/Home/HomePage';
// import achievments from './Pages/Achievements/Achievements';
// import creations from './Pages/Creations/Creations';
// import about from './Pages/AboutMe/AboutMe';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/achievments" element={<achievments />} />
                <Route path="/creations" element={<creations />} />
                <Route path="/about" element={<about />} />
                <Route path="/contact" element={<contact />} />
                <Route path="/projects" element={<projects />} />
                <Route path="/skills" element={<skills />} />
                <Route path="/LandingPage" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);