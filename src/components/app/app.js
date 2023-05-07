import "./app.css";
import AppHeader from "../app-header/app-header";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../../pages/register-page/register-page";
import RecoveryPasswordPage from "../../pages/recovery-password-page/recovery-password-page";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<RecoveryPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
