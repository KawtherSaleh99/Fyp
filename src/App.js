import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
  useLocation,
} from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import React, { useState } from "react";
import Home from "./pages";
import SigninPage from "./pages/signin";
import ProgrammesPage from "./pages/programmes/index";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/auth";
import Dashboard from "./pages/admin/index";
import AddStaff from "./pages/admin/AddStaff";
import AddProgramme from "./pages/admin/AddProgramme";

function App() {
  const [user, loading] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  function PrivateRoute({ component: Component, ...rest }) {
    const isLogged = user;
    if (loading) {
      return <div>loading</div>;
    }

    return isLogged ? <Component /> : <Navigate to="/signin" />;
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/programme" element={<ProgrammesPage />} exact />
        <Route
          path="/departments/computer-science"
          element={<ProgrammesPage />}
          exact
        />
        <Route
          path="/departments/library-infromation-science"
          element={<ProgrammesPage />}
          exact
        />
        <Route
          path="/departments/nfromation-systems"
          element={<ProgrammesPage />}
          exact
        />

        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          exact
          path="/dashboard/staff"
          element={<PrivateRoute component={AddStaff} />}
        />
        <Route
          exact
          path="/dashboard/addProgramme"
          element={<PrivateRoute component={AddProgramme} />}
        />
      </Routes>
    </>
  );
}

export default App;
