import styles from './profile-page.module.css'
import {useState} from "react";
import {Button, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const ProfilePage = () => {
  const [nameValue, setNameValue] = useState("Марк");
  const [emailValue, setEmailValue] = useState("mail@stellar.burgers");
  const [passwordValue, setPasswordValue] = useState("dfsfsfsdf");
  return (
    <main className={styles.wrapper}>
      <div className={styles.menuWrapper}>
      <ul className={styles.menu}>
        <li>
          <NavLink
            style={({isActive}) => ({
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
            style={({isActive}) => ({
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
            style={({isActive}) => ({
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
      <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <EmailInput
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.value)}
          value={nameValue}
          name={'name'}
          size={'default'}
          isIcon={true}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={e => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder={"Логин"}
          isIcon={true}
        />
        <PasswordInput
          onChange={e => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          extraClass="mb-2 mt-6"
          icon={"EditIcon"}
          isIcon={true}
          placeholder={"Пароль"}
        />
        <Button extraClass="mt-4" htmlType="button" type="primary" size="large">
          Сохранить
        </Button>
      </form>
    </main>
  );
}

export default ProfilePage;
