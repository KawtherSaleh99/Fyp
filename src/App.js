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
import { Courses } from "./pages/courses/index";
import StaffPage from "./pages/staff/index";
import About from "./pages/about";

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
        ////////////////////////////////////////////////////////////
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/programme" element={<ProgrammesPage />} exact />
        <Route path="/staff" element={<StaffPage />} exact />
        <Route path="/about" element={<About />} exact />
        ////////////////////////////////////////////////////////////
        <Route path="/courses/dis1" element={<Courses title="dis1" />} exact />
        <Route path="/courses/dis2" element={<Courses title="dis2" />} exact />
        <Route path="/courses/dis3" element={<Courses title="dis3" />} exact />
        <Route path="/courses/dis4" element={<Courses title="dis4" />} exact />
        ////////////////////////////////////////////////////////////
        <Route path="/courses/dcs1" element={<Courses title="dcs1" />} exact />
        <Route path="/courses/dcs2" element={<Courses title="dcs2" />} exact />
        ////////////////////////////////////////////////////////////
        <Route path="/courses/is1" element={<Courses title="is1" />} exact />
        <Route path="/courses/is2" element={<Courses title="is2" />} exact />
        ////////////////////////////////////////////////////////////
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
