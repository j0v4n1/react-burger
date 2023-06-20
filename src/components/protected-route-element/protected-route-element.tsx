import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import getUserData from '../../utils/getUserData';
import updateToken from '../../utils/updateToken';

const ProtectedRouteElement = ({ element }) => {
  const dispatch = useDispatch();
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
  const accessToken = useSelector((store) => store.profile.accessToken);
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
