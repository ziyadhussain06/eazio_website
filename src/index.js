import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Homepage'
import About from './Aboutpage'
import Price from './Pricing';
import Features from './Features';
import ContactUs from './Contact-Us';
import NotFoundPage from './NotFoundPage';
import PrivacyPolicy from './Privacy-Policy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}>home</Route>
        <Route path="*" element={<NotFoundPage/> } />   
        <Route path="/about" element={<About/>}>
          about
        </Route>
        {/* <Route path="beta/careers" element={<Careers/>}>
          Careers
        </Route> */}
        <Route path="/pricing" element={<Price/>}>
        pricing
        </Route>
        <Route path="/features" element={<Features/>}>
        features
        </Route>
        <Route path="/contact-Us" element={<ContactUs/>}>
          Contact-Us
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}>
          privacypolicy
        </Route>
       
      </Routes>
     
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
</>
);
reportWebVitals();
