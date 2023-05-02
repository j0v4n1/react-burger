import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <BurgerIcon type="primary" />
              <Link to={"/"}
                style={{ color: "var(--text-primary-color)" }}
                className={styles.link}
                href={"#"}
              >
                Конструктор
              </Link>
            </li>
            <li className={styles.item}>
              <ListIcon type="secondary" />
              <a className={styles.link} href={"#"}>
                Лента заказов
              </a>
            </li>
          </ul>
          <Logo />
        </nav>
        <div className={styles.account}>
          <ProfileIcon type="secondary" />
          <Link to={"/login"} className={styles.link}>
            Личный кабинет
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
