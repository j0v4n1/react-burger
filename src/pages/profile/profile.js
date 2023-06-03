import styles from './profile.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import authentication from '../../utils/authentication-api';
import { LOGOUT_URL } from '../../constants/constants';
import { setIsLoggedIn, setAccessToken } from '../../services/slices/profile';
import { useDispatch } from 'react-redux';
import ProfileForm from '../profile-form/profile-form';
import Orders from '../orders/orders';
import ProtectedRouteElement from '../../components/protected-route-element/protected-route-element';

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    authentication(LOGOUT_URL, {
      body: {
        token: JSON.parse(localStorage.getItem('refreshToken')),
      },
    }).then(() => {
      localStorage.removeItem('refreshToken');
      dispatch(setAccessToken(null));
      dispatch(setIsLoggedIn(false));
    });
  };

  return <>
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li>
            <NavLink end style={({ isActive }) => ({
              color: isActive ? 'var(--text-primary-color)' : 'var(--text-inactive-color)',
            })}
                     className={classNames(styles.link, 'text_type_main-medium')}
                     to={'/profile'}>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink end style={({ isActive }) => ({
              color: isActive ? 'var(--text-primary-color)' : 'var(--text-inactive-color)',
            })}
                     to={'/profile/orders'}
                     className={classNames(styles.link, 'text_type_main-medium')}>
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLogOut}
              style={({ isActive }) => ({
                color: isActive ? 'var(--text-primary-color)' : 'var(--text-inactive-color)',
              })}
              to={'/login'}
              className={classNames(styles.link, 'text_type_main-medium')}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p
          className={classNames(styles.paragraph, 'text text_type_main-small')}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Routes>
        <Route path='/' element={<ProfileForm />} />
        <Route path='/orders/*' element={<ProtectedRouteElement element={<Orders />} />} />
      </Routes>
    </div>
  </>;
};

export default Profile;
