import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";

const BurgerConstructor = ({ data, onHandleOpenModal, changeModalContent }) => {
  const bun = data.find((el) => el.type === "bun");

  return (
    <div className={styles.constructor}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          listStyle: "none",
          padding: 0,
          margin: "16px 0 40px",
        }}
      >
        {bun ? (
          <li className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        ) : null}
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
        {bun ? (
          <li className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        ) : null}
      </ul>
      <div className={styles.bottom}>
        <div
          className="mr-10"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="mr-2 text text_type_digits-medium">610</div>
          <div className={styles.svgWrapper}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          onClick={() => {
            onHandleOpenModal();
            changeModalContent('order-details')
          }}
          htmlType="button"
          type="primary"
          size="large"
        >
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
