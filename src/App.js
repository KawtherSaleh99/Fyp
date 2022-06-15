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

function App() {
  const [user, loading] = useAuthState(auth);

  function PrivateRoute({ component: Component, ...rest }) {
    const isLogged = user;
    if (loading) {
      return <div>loading</div>;
    }

    return isLogged ? <Component /> : <Navigate to="/signin" />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/programme" element={<ProgrammesPage />} exact />

        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </>
  );
}

export default App;
