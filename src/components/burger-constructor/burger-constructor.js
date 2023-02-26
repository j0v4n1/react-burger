import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import styles from "./burger-constructor.module.css";

const [{ image }] = data;

const BurgerConstructor = () => {
  const ingredients = data.map((el) => {
    if (el.type !== "bun") {
      return (
        <li key={el._id} className={styles.item}>
          <div className="mr-2">
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text={el.name}
            price={el.price}
            thumbnail={el.image}
          />
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
            isLocked={image}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={image}
          />
        </li>
        <li>
          <ul className={styles.list}>{ingredients}</ul>
        </li>
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={image}
          />
        </li>
      </ul>
      <div className={styles.bottom}>
        <div className="mr-10" style={{display: 'flex', alignItems: 'center'}}>
          <div className="mr-2 text text_type_digits-medium">610</div>
          <div><CurrencyIcon type="primary" /></div>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
