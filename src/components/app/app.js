import "./app.css";
import AppHeader from "../app-header/app-header";
import MainPage from "../../pages/main-page/main-page";
import Page404 from "../../pages/page-404/page-404";
import LoginPage from "../../pages/login-page/login-page";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterPage from "../../pages/register-page/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getUserInformation from "../../utils/getUserInformation";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import ProtectedRouteAuthorized from "../protected-route-authorized/protected-route-authorized";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

const App = () => {

  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.profile.accessToken)
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))

  useEffect(() => {
    getUserInformation(dispatch, accessToken, refreshToken)
  }, [])

  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/ingredients/:id' element={<Modal><IngredientDetails/></Modal>}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage/>}/>}/>
        <Route path="/login" element={<ProtectedRouteAuthorized element={<LoginPage/>}/>}/>
        <Route path="/register" element={<ProtectedRouteAuthorized element={<RegisterPage/>}/>}/>
        <Route path="/reset-password" element={<ProtectedRouteAuthorized element={<ResetPasswordPage/>}/>}/>
        <Route path="/forgot-password" element={<ProtectedRouteAuthorized element={<ForgotPasswordPage/>}/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  );
};

export default App;
