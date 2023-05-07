import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./new-password-page.module.css";
import { Link } from "react-router-dom";

const NewPasswordPage = () => {
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [recoveryCodeValue, setRecoveryCodeValue] = useState("");
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.header}>Восстановление пароля</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
      <PasswordInput
        onChange={(e) => setNewPasswordValue(e.target.value)}
        value={newPasswordValue}
        name={"newPassword"}
        extraClass="mb-2"
        placeholder="Введите новый пароль"
        />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={e => setRecoveryCodeValue(e.target.value)}
        value={recoveryCodeValue}
        name={'name'}
        error={false}
        size={'default'}
        extraClass="ml-1 mt-6"
      />
      </form>
      <Button extraClass="mt-4" htmlType="button" type="primary" size="large">
        Сохранить
      </Button>
      <p className="mt-20 mb-6">
        Вспомнили пароль? <Link to={"/login"}>Войти</Link>
      </p>
    </main>
  );
};

export default NewPasswordPage;
