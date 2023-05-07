import update from "immutability-helper";
import styles from "./burger-constructor.module.css";
import getOrderNumber from "../../utils/order-api";
import Modal from "../modal/modal";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { useDrop } from "react-dnd";
import OrderDetails from "../order-details/order-details";
import BurgerConstructorIngredient from "../burger-constructor-ingredient/burger-constructor-ingredient";
import { set, remove } from "../order-details/order-details-slice";
import { removeAllIngredients, setIngredient } from "./burger-constructor-slice";

const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const {ingredients, bun} = useSelector(store => store.burgerConstructor);

  const handleRemoveOrder = () => {
    dispatch(remove());
  }

  const burgerConstructorIngredients = [
    bun, ...ingredients.flatMap((ingredient) => ingredient), bun
  ];

  const dropHandler = (ingredient) => {
    dispatch(setIngredient(ingredient));
  };

  // const findCard = useCallback(
  //   (id) => {
  //     const ingredient = burgerConstructorIngredients.filter(
  //       (ingredient) => `${ingredient._id}` === id
  //     )[0];
  //     return {
  //       ingredient,
  //       index: burgerConstructorIngredients.indexOf(ingredient),
  //     };
  //   },
  //   [burgerConstructorIngredients]
  // );
  // const moveCard = useCallback(
  //   (id, atIndex) => {
  //     const { ingredient, index } = findCard(id);
  //     setCards(
  //       update(burgerConstructorIngredients, {
  //         $splice: [
  //           [index, 1],
  //           [atIndex, 0, ingredient],
  //         ],
  //       })
  //     );
  //   },
  //   [findCard, burgerConstructorIngredients, setCards]
  // );

  const [{ isOver }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: ({ ingredient }) => {
      dropHandler(ingredient);
    },
  });

  const orderNumber = useSelector(store => store.orderDetails.orderNumber);

  const fetchOrderNumber = () => {
    const ingredientsAndBunsIdsList = [
      bun._id, ...ingredients.flatMap(({ _id }) => _id), bun._id,
    ];
    getOrderNumber(ingredientsAndBunsIdsList)
      .then((orderData) => {
        dispatch(set(orderData.order.number))
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(removeAllIngredients());
      });
  };

  const totalPrice = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, item) => {
      if (item && item.price) {
        return sum + item.price;
      }
      return sum;
    }, 0);
  }, [burgerConstructorIngredients]);

  return <div className={styles.constructor}>
      <ul
        className={styles.mainList}
        ref={dropTarget}
        style={isOver ? { outlineStyle: "solid" } : null}
      >
        {!bun ? null : (
          <li className="ml-8" style={{ cursor: "pointer" }}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        )}
        <li>
          <ul className={styles.list}>
            {ingredients.map(ingredient => {
              return <BurgerConstructorIngredient key={ingredient.uniqueId} ingredient ={ingredient}/>
            })}
            <div>
              {orderNumber && (
                <Modal
                  onClose={ handleRemoveOrder }
                >
                  <OrderDetails />
                </Modal>
              )}
            </div>
          </ul>
        </li>
        {!bun ? null : (
          <li className="ml-8" style={{ cursor: "pointer" }}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
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
          disabled={!bun}
          onClick={fetchOrderNumber}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
};

export default BurgerConstructor;
