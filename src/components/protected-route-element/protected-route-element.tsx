import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import getUserData from '../../utils/getUserData';
import updateToken from '../../utils/updateToken';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { TToken } from '../../types';
import { IProtectedRouteComponent } from './protected-route-element.types';

const ProtectedRouteElement: React.FC<IProtectedRouteComponent> = ({ element }) => {
  const dispatch = useAppDispatch();
  const refreshToken: TToken = localStorage.getItem('refreshToken');
  const accessToken = useAppSelector((store) => store.profile.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      getUserData(accessToken, dispatch);
    } else if (refreshToken) {
      updateToken(dispatch);
    } else {
      navigate('/login');
    }
  }, [accessToken]);

  return element;
};
export default ProtectedRouteElement;
