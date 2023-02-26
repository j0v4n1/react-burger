import { useState } from "react";
import PropTypes from 'prop-types';
import {
  Tab,
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";


import styles from "./burger-ingredients.module.css";

const BurgerIngredients = ({data}) => {

  const [current, setCurrent] = useState("one");
  const buns = data.map((bun) => {

    if (bun.type === "bun") {
      return (
        <li key={bun.id} className={styles.item}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className={styles.image} src={bun.image} alt={bun.name} />
          <div style={{ display: "flex" }}>
            <p className={"text text_type_digits-default pb-1 pr-2"}>
              {bun.price}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <p
            style={{ textAlign: "center" }}
            className={"text text_type_main-default"}
          >
            {bun.name}
          </p>
        </li>
      );
    }
  });
  const sauces = data.map((sauce) => {
    if (sauce.type === "sauce") {
      return (
        <li key={sauce.id} className={styles.item}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className={styles.image} src={sauce.image} alt={sauce.name} />
          <div style={{ display: "flex" }}>
            <p className={"text text_type_digits-default pb-1 pr-2"}>
              {sauce.price}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <p
            style={{ textAlign: "center" }}
            className={"text text_type_main-default"}
          >
            {sauce.name}
          </p>
        </li>
      );
    }
  });
  const cutlets = data.map((cutlet) => {
    if (cutlet.type === "main") {
      return (
        <li key={cutlet.id} className={styles.item}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img className={styles.image} src={cutlet.image} alt={cutlet.name} />
          <div style={{ display: "flex" }}>
            <p className={"text text_type_digits-default pb-1 pr-2"}>
              {cutlet.price}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <p
            style={{ textAlign: "center" }}
            className={"text text_type_main-default"}
          >
            {cutlet.name}
          </p>
        </li>
      );
    }
  });
  return (
    <div className={styles.ingredients}>
      <h1 className={styles.title}>Соберите бургер</h1>
      <div className={"mt-5"} style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.wrapper}>
        <h2 className={"text text_type_main-medium"}>Булки</h2>
        <ul className={styles.list}>{buns}</ul>
        <h2 className={"text text_type_main-medium"}>Соусы</h2>
        <ul className={styles.list}>{sauces}</ul>
        <h2 className={"text text_type_main-medium"}>Начинки</h2>
        <ul className={styles.list}>{cutlets}</ul>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients;
