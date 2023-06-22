import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../types/hooks';
import { IProtectedRouteAuthorizedComponent } from './protected-route-authorized.types';
import { PATH_CONSTRUCTOR_PAGE } from '../../constants/constants';

const ProtectedRouteAuthorized: React.FC<IProtectedRouteAuthorizedComponent> = ({ element }) => {
  const accessToken = useAppSelector((store) => store.profile.accessToken);
  const navigate = useNavigate();

  const init = () => {
    if (accessToken) {
      navigate(PATH_CONSTRUCTOR_PAGE);
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, [accessToken]);

  return <>{element}</>;
};

export default ProtectedRouteAuthorized;
