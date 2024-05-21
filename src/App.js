import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vincertax from "./component/HomeComponent/Vincertax";
import Login from "./component/Login/Login";
import { Workspacehome } from './component/workspace/Workspacehome'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Vincertax />} />
          <Route path="/Login" element={<Login />} />
          <Route path="workspacehome" element={<Workspacehome />} />
          <Route path="/NotFound" element={<>NotFound</>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
