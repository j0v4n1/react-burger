import "./app.css";
import AppHeader from "../app-header/app-header";
import MainPage from "../../pages/main-page/main-page";
import Page404 from "../../pages/page-404/page-404";
import LoginPage from "../../pages/login-page/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../../pages/register-page/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getUserInformation from "../../utils/getUserInformation";

const App = () => {

  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.profile.accessToken)

  useEffect(() => {
    getUserInformation(dispatch, accessToken)
  }, [])

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
