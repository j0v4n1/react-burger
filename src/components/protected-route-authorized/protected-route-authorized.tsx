import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../types/hooks';
import { IProtectedRouteAuthorizedComponent } from './protected-route-authorized.types';

const ProtectedRouteAuthorized: React.FC<IProtectedRouteAuthorizedComponent> = ({ element }) => {
  const accessToken = useAppSelector((store) => store.profile.accessToken);
  const navigate = useNavigate();

  const init = () => {
    if (accessToken) {
      navigate('/');
    }
  };

  useEffect(() => {
    init();
  }, [accessToken]);

  return element;
};

export default ProtectedRouteAuthorized;
