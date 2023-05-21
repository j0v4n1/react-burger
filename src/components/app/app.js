import "./app.css";
import {
  MainPage,
  Page404,
  ProfilePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ForgotPasswordPage
} from "../../pages";
import AppHeader from "../app-header/app-header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getUserInformation from "../../utils/getUserInformation";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import ProtectedRouteAuthorized from "../protected-route-authorized/protected-route-authorized";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import {ORDERS_LIST_URL} from "../../constants/constants";
import Feed from "../feed/feed";

const App = () => {

  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.profile.accessToken)
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))

  useEffect(() => {
    getUserInformation(dispatch, accessToken, refreshToken)
  }, [])

  // const socket = new WebSocket(ORDERS_LIST_URL)
  // socket.onopen = event => console.log(event)

  return (
    <Router>
      <AppHeader/>
      <main className={'content'}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/ingredients/:id' element={<Modal><IngredientDetails/></Modal>}/>
          <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage/>}/>}/>
          <Route path="/login" element={<ProtectedRouteAuthorized element={<LoginPage/>}/>}/>
          <Route path={'/feed'} element={<Feed/>}/>
          <Route path="/register" element={<ProtectedRouteAuthorized element={<RegisterPage/>}/>}/>
          <Route path="/reset-password" element={<ProtectedRouteAuthorized element={<ResetPasswordPage/>}/>}/>
          <Route path="/forgot-password" element={<ProtectedRouteAuthorized element={<ForgotPasswordPage/>}/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
