import { Input, PasswordInput, EmailInput, Button, } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import authentication from "../../utils/authentication-api";
import { useDispatch } from "react-redux";
import { REGISTRATION_URL } from "../../constants/constants";
import { setAuthData } from "../../utils/utils";

const Register = () => {

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    authentication(REGISTRATION_URL, {
      body: {
        email,
        password,
        name
      }
    }).then((data) => {
      setAuthData(
        dispatch,
        data.refreshToken,
        data.accessToken,
        data.user.name,
        data.user.email)
      navigate('/profile');
    })
  }

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.header}>Регистрация</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
          extraClass="mb-2"
        />
      </form>
      <Button
        extraClass="mt-4"
        htmlType="button"
        type="primary"
        size="large"
        disabled={!name || !password || !email}
        onClick={handleRegister}
      >
        Зарегистрироваться
      </Button>
      <p className="mt-20 mb-6">
        Уже зарегистрированы? <Link to={"/login"}>Войти</Link>
      </p>
    </main>
  );
};

export default Register;
