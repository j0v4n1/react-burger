import './app.css';
import { Main, Page404, Profile, Login, Register, ResetPassword, ForgotPassword } from '../../pages';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getUserInformation from '../../utils/getUserInformation';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import ProtectedRouteAuthorized from '../protected-route-authorized/protected-route-authorized';
import Feed from '../../pages/feed/feed';
import { fetchIngredients } from '../../services/slices/burger-ingredients';
import Spinner from '../spinner/spinner';

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.profile.accessToken);
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

  useEffect(() => {
    dispatch(fetchIngredients());
    getUserInformation(dispatch, accessToken, refreshToken);
  }, []);

  const loading = useSelector((store) => store.burgerIngredients.loading);
  const isLoggedIn = useSelector((store) => store.profile.isLoggedIn);

  return loading && !isLoggedIn ? (
    <Spinner height={'calc(100vh - 128px)'} />
  ) : (
    <Router>
      <AppHeader />
      <main className={'content'}>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/profile/*" element={<ProtectedRouteElement element={<Profile />} />} />
          <Route path="/login" element={<ProtectedRouteAuthorized element={<Login />} />} />
          <Route path="/feed/*" element={<Feed />} />
          <Route path="/register" element={<ProtectedRouteAuthorized element={<Register />} />} />
          <Route path="/reset-password" element={<ProtectedRouteAuthorized element={<ResetPassword />} />} />
          <Route path="/forgot-password" element={<ProtectedRouteAuthorized element={<ForgotPassword />} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
