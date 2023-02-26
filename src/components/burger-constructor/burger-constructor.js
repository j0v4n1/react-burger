import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const BurgerConstructor = ({ data }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(total);
  }, []);

  let total = 0;

  const ingredients = data.map(({ id, name, price, image, type }) => {
    total += price;
    if (type !== "bun") {
      return (
        <li key={id} className={styles.item}>
          <div className="mr-2">
            <DragIcon type="primary" />
          </div>
          <ConstructorElement text={name} price={price} thumbnail={image} />
        </li>
      );
    }
  });
  return (
    <div className={styles.constructor}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${data[0].name}(верх)`}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </li>
        <li>
          <ul className={styles.list}>{ingredients}</ul>
        </li>
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${data[0].name}(низ)`}
            price={200}
            thumbnail={data[0].image}
          />
        </li>
      </ul>
      <div className={styles.bottom}>
        <div
          className="mr-10"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="mr-2 text text_type_digits-medium">{totalPrice}</div>
          <div className={styles.svgWrapper}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerConstructor;
