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
  
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let total = 0;
    data.forEach(({ price }) => {
      total += price;
    });
    setTotalPrice(total);
  }, [data]);

  const ingredients = data.map(({ _id, name, price, image }, index) => {
    if (index === 0) {
      return (
        <ul
          key={_id}
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
              text={name}
              price={price}
              thumbnail={image}
            />
          </li>
          <li>
            <ul className={styles.list}>
              {data.map(({ _id, name, price, image, type }) => {
                if (type !== "bun") {
                  return (
                    <li key={_id} className={styles.item}>
                      <div className="mr-2">
                        <DragIcon type="primary" />
                      </div>
                      <ConstructorElement
                        text={name}
                        price={price}
                        thumbnail={image}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </li>
          <li className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={name}
              price={price}
              thumbnail={image}
            />
          </li>
        </ul>
      );
    }
  });

  return (
    <div className={styles.constructor}>
      {ingredients}
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
