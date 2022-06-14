import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages";
import SigninPage from "./pages/signin";
import ProgrammesPage from "./pages/programmes/index";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/programme" element={<ProgrammesPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
