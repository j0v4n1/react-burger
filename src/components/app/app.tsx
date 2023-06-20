import './app.css';
import { Main, Page404, Profile, Login, Register, ResetPassword, ForgotPassword } from '../../pages';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import getUserInformation from '../../utils/getUserInformation';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import ProtectedRouteAuthorized from '../protected-route-authorized/protected-route-authorized';
import Feed from '../../pages/feed/feed';
import { fetchIngredients } from '../../services/slices/burger-ingredients';
import Spinner from '../spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { TToken } from '../../types';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken: TToken = useAppSelector((store) => store.profile.accessToken);
  const refreshToken: TToken = localStorage.getItem('refreshToken');

  useEffect(() => {
    dispatch(fetchIngredients());
    getUserInformation(dispatch, accessToken, refreshToken);
  }, []);

  const loading: boolean = useAppSelector((store) => store.burgerIngredients.loading);
  const isLoggedIn: boolean = useAppSelector((store) => store.profile.isLoggedIn);

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
