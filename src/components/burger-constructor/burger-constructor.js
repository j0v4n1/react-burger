import update from 'immutability-helper'
import styles from "./burger-constructor.module.css";
import getOrderNumber from "../../utils/order-api";
import Modal from "../modal/modal";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { useDrop } from "react-dnd";
import { setIngredient } from "../../services/actions/set-ingredient";
import OrderDetails from "../order-details/order-details";
import { bun } from "../../constants/constants";
import BurgerConstructorIngredient from "../burger-constructor-ingredient/burger-constructor-ingredient";
import {
  REMOVE_ORDER_DETAILS,
  SET_ORDER_DETAILS,
} from "../../services/actions/order-details";
import { REMOVE_ALL_INGREDIENTS } from "../../services/actions/set-ingredient";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const burgerConstructorIngredients = [
    burgerObject.bun,
    ...burgerObject.ingredients.flatMap((ingredient) => ingredient),
    burgerObject.bun,
  ];
  const dropHandler = (ingredient) => {
    dispatch(setIngredient(ingredient));
  };

  const findCard = useCallback(
    (id) => {
      const ingredient = burgerConstructorIngredients.filter((ingredient) => `${ingredient._id}` === id)[0];
      return {
        ingredient,
        index: burgerConstructorIngredients.indexOf(ingredient),
      };
    },
    [burgerConstructorIngredients]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { ingredient, index } = findCard(id);
      setCards(
        update(burgerConstructorIngredients, {
          $splice: [
            [index, 1],
            [atIndex, 0, ingredient],
          ],
        })
      );
    },
    [findCard, burgerConstructorIngredients, setCards]
  );

  const [{ isOver }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: ({ ingredient }) => {
      dropHandler(ingredient);
    },
  });
  const burgerObject = useSelector(
    (store) => store.burgerConstructor.burgerObject
  );
  const orderNumber = useSelector((store) => store.orderDetails.orderNumber);

  const fetchOrderNumber = () => {
    const ingredientsAndBunsIdsList = [
      burgerObject.bun._id,
      ...burgerObject.ingredients.flatMap(({ _id }) => _id),
      burgerObject.bun._id,
    ];
    getOrderNumber(ingredientsAndBunsIdsList)
      .then((orderData) => {
        dispatch({
          type: SET_ORDER_DETAILS,
          number: orderData.order.number,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch({
          type: REMOVE_ALL_INGREDIENTS,
        });
      });
  };

  const isBurgerObjectEmpty = () => {
    return (
      Object.keys(burgerObject.bun).length === 0 &&
      Object.keys(burgerObject.ingredients).length === 0
    );
  };
  const disableButton = isBurgerObjectEmpty();

  const totalPrice = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, item) => {
      if (item.type === bun) {
        return sum + item.price * 2;
      }
      return sum + item.price;
    }, 0);
  }, [burgerConstructorIngredients]);

  return (
    <div className={styles.constructor}>
      <ul
        className={styles.mainList}
        ref={dropTarget}
        style={isOver ? { outlineStyle: "solid" } : null}
      >
        {Object.entries(burgerObject.bun).length === 0 ? null : (
          <li className="ml-8" style={{ cursor: "pointer" }}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${burgerObject.bun.name} (верх)`}
              price={burgerObject.bun.price}
              thumbnail={burgerObject.bun.image}
            />
          </li>
        )}
        <li>
          <ul className={styles.list}>
            {burgerObject.ingredients.map(({ newId, name, price, image }) => {
              return (
                <BurgerConstructorIngredient
                  key={newId}
                  name={name}
                  image={image}
                  newId={newId}
                  price={price}
                />
              );
            })}
            <div>
              {orderNumber && (
                <Modal
                  onClose={() => {
                    dispatch({
                      type: REMOVE_ORDER_DETAILS,
                    });
                  }}
                >
                  <OrderDetails />
                </Modal>
              )}
            </div>
          </ul>
        </li>
        {Object.entries(burgerObject.bun).length === 0 ? null : (
          <li className="ml-8" style={{ cursor: "pointer" }}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${burgerObject.bun.name} (верх)`}
              price={burgerObject.bun.price}
              thumbnail={burgerObject.bun.image}
            />
          </li>
        )}
      </ul>
      <div className={styles.bottom}>
        <div
          className="mr-10"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="mr-2 text text_type_digits-medium">
            {totalPrice ? totalPrice : 0}
          </div>
          <div className={styles.svgWrapper}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          onClick={() => {
            fetchOrderNumber();
          }}
          htmlType="button"
          type="primary"
          size="large"
          disabled={disableButton}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
