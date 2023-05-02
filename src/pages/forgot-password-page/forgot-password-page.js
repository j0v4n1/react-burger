import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./forgot-password-page.module.css";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState("");
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.header}>Восстановление пароля</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
      </form>
      <Button extraClass="mt-4" htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
      <p className="mt-20 mb-6">
        Вспомнили пароль? <Link to={"/login"}>Войти</Link>
      </p>
    </main>
  );
};

export default ForgotPasswordPage;
