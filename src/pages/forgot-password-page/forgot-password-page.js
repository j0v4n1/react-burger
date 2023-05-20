import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./forgot-password-page.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import authentication from "../../utils/authentication-api";
import { RESET_PASSWORD_URL } from "../../constants/constants";

const ForgotPasswordPage = () => {

  const [emailValue, setEmailValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleResetPassword = () => {
    authentication(RESET_PASSWORD_URL, {
      body: {
        email: emailValue
      }
    }).then(() => {
      navigate('/reset-password', {state: location.pathname})
    })
  }

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
      <Button onClick={handleResetPassword} extraClass="mt-4" htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
      <p className="mt-20 mb-6">
        Вспомнили пароль? <Link to={"/login"}>Войти</Link>
      </p>
    </main>
  );
};

export default ForgotPasswordPage;
