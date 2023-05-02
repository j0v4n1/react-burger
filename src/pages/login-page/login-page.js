import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.header}>Вход</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          extraClass="mb-2"
        />
      </div>
      <Button extraClass="mt-4" htmlType="button" type="primary" size="large">
        Войти
      </Button>
      <p className="mt-20 mb-6">
        Вы — новый пользователь? <Link>Зарегистрироваться</Link>
      </p>
      <p style={{ margin: 0 }}>
        Забыли пароль? <Link>Восстановить пароль</Link>
      </p>
    </main>
  );
};

export default LoginPage;
