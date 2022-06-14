import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import ProgrammesPage from "./pages/programmes/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/programme" element={<ProgrammesPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
