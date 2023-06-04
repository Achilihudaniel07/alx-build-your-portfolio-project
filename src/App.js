import React from "react";
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from './pages/projectPage/ProjectPage';
import ContactPage from './pages/contactPage/ContactPage';
import ClientPage from "./pages/clientPage/ClientPage";
import FaqPage from './pages/faqPage/FaqPage';
import StaffPage from "./pages/staffPage/StaffPage";
import AllStaffPage from "./pages/staffPage/AllStaffPage";
import TermsPage from "./pages/termsPage/TermsPage";
import PrivacyPolicyPage from "./pages/privacyPolicyPage/PrivacyPolicyPage";





function App() {
  return (
    <div className="jdgt">

      <Routes >
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contactus' element={<ContactPage />} />
        <Route exact path='/staff' element={<StaffPage />}/>
        <Route exact path='/allstaff' element={<AllStaffPage />}/>
        <Route exact path='/clientsremarks' element={<ClientPage />}/>
        <Route exact path='/projects' element={<ProjectPage />}/>
        <Route exact path='/termsandconditions' element={<TermsPage />}/>
        <Route exact path='/privacypolicy' element={<PrivacyPolicyPage />}/>
        <Route exact path='/about' element={<AboutPage  />}/>
        <Route exact path='/faq' element={<FaqPage />}/>
        <Route exact path="*" element={<h1>404</h1>} />
      </Routes>
    </div>

  );

}

export default App;
