import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vincertax from "./component/HomeComponent/Vincertax";
import Login from "./component/Login/Login";
import {
  AboutUs,
  OurAim,
  OurVision,
} from "./component/workspacehome/pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./component/workspacehome/pages/Services";
import Dashboard from "./component/workspace/Index";

const App = () => {
  return (
    <>
      <Router>
        <div className="container display-flex">
          {true && <Dashboard />}
          <div className="content">
            <Routes>
              <Route path="/" element={<Vincertax />} />
              <Route path="/Login" element={<Login />} />
              <Route path="Workspace" element={<Dashboard />} />
              <Route
                path="/about-us"
                element={<AboutUs />}
              />
              <Route
                path="/about-us/aim"
                element={<OurAim />}
              />
              <Route
                path="/about-us/vision"
                element={<OurVision />}
              />
              <Route
                path="/services"
                element={<Services />}
              />
              <Route
                path="/services/services1"
                element={<ServicesOne />}
              />
              <Route
                path="/services/services2"
                element={<ServicesTwo />}
              />
              <Route
                path="/services/services3"
                element={<ServicesThree />}
              />
              <Route path="/NotFound" element={<>NotFound</>} />
            </Routes>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
