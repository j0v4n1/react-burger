import styles from './profile-page.module.css'
import { useState, useEffect } from "react";
import { Button, PasswordInput, EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import authentication from '../../utils/authentication-api';
import { LOGOUT_URL, PROFILE_URL } from '../../constants/constants';
import { setProfileEmail, setProfileName } from "../../services/slices/profile-slice";

const ProfilePage = () => {

  const { profileName, profileEmail, accessToken } = useSelector(store => store.profile)

  const [nameValue, setNameValue] = useState(profileName);
  const [emailValue, setEmailValue] = useState(profileEmail);
  const [passwordValue, setPasswordValue] = useState("qwerty123");

  useEffect(() => {
    if (profileName && profileEmail) {
      setNameValue(profileName);
      setEmailValue(profileEmail)
    }
  }, [profileEmail, profileName])

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFormChanged = () => {
    if ((profileName === nameValue) && (profileEmail === emailValue)) {
      return false
    } else {
      return true
    }
  }

  const handleLogOut = () => {
    authentication(LOGOUT_URL, {
      body: {
        token: JSON.parse(localStorage.getItem('refreshToken'))
      }
    })
      .then(() => {
        localStorage.removeItem('refreshToken');
        navigate('/login')
      })
  }

  const handleCancelButton = () => {
    setNameValue(profileName);
    setEmailValue(profileEmail)
  }

  const handleChangeFields = () => {
    authentication(PROFILE_URL, {
      method: 'PATCH',
      headers: {
        authorization: accessToken
      },
      body: {
        name: nameValue,
        email: emailValue,
        password: passwordValue
      }
    })
    .then(data => {
      dispatch(setProfileName(data.user.name))
      dispatch(setProfileEmail(data.user.email))
    })
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--text-primary-color)"
                  : "var(--text-inactive-color)",
              })}
              className={classNames(styles.link, "text_type_main-medium")}
              to={"/profile"}>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--text-primary-color)"
                  : "var(--text-inactive-color)",
              })}
              to={"/profile/orders"}
              className={classNames(styles.link, "text_type_main-medium")}>
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLogOut}
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--text-primary-color)"
                  : "var(--text-inactive-color)",
              })}
              to={"/login"}
              className={classNames(styles.link, "text_type_main-medium")}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={classNames(styles.paragraph, "text text_type_main-small")}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.value)}
          value={nameValue}
          name={'name'}
          size={'default'}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={e => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder={"Логин"}
        />
        <PasswordInput
          onChange={e => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          extraClass="mb-2 mt-6"
          placeholder={"Пароль"}
        />
        <div className={styles.buttons}>
          {isFormChanged() ? <Button onClick={handleCancelButton} htmlType="button" type="secondary" size="large">
            Отмена
          </Button> : null}
          <Button onClick={handleChangeFields} extraClass="mt-4" htmlType="button" type="primary" size="large">
            Сохранить
          </Button>
        </div>
      </form>
    </main>
  );
}

export default ProfilePage;
