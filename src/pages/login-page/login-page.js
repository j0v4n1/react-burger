import { PasswordInput, EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./login-page.module.css";
import { setAccessToken, setIsLoggedIn, setProfileEmail, setProfileName } from "../../services/slices/profile-slice";
import { Link, useNavigate } from "react-router-dom";
import authentication from "../../utils/authentication-api";
import { AUTHORIZATION_URL } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../utils/utils";

const LoginPage = () => {

  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = () => {
    authentication(AUTHORIZATION_URL, {
        body: {
            email: emailValue,
            password: passwordValue
        }
    })
    .then((data) => {
      setAuthData(
        dispatch,
        data.refreshToken,
        data.accessToken,
        data.user.name,
        data.user.email)
        navigate('/')
    })
  }

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.header}>Вход</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={"email"}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          extraClass="mb-2"
        />
      </form>
      <Button onClick={handleLogIn} extraClass="mt-4" htmlType="button" type="primary" size="large">
        Войти
      </Button>
      <p className="mt-20 mb-6">
        Вы — новый пользователь? <Link to={'/register'}>Зарегистрироваться</Link>
      </p>
      <p style={{ margin: 0 }}>
        Забыли пароль? <Link to={"/forgot-password"}>Восстановить пароль</Link>
      </p>
    </main>
  );
};

export default LoginPage;
