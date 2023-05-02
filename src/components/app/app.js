import "./app.css";
import AppHeader from "../app-header/app-header";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
