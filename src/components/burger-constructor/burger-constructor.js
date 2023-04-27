import styles from "./burger-constructor.module.css";
import getOrderNumber from "../../utils/order-api";
import Modal from "../modal/modal";
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {useDrop} from "react-dnd";
import {setIngredient} from "../../services/actions/set-ingredient";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const dropHandler = (ingredientType, _id, name, image, price, fat, proteins, carbohydrates, calories) => {
    dispatch(setIngredient(ingredientType, _id, name, image, price, fat, proteins, carbohydrates, calories))
  }

  const [{isOver}, dropTarget] = useDrop({
    accept: "ingredient", collect: monitor => ({
      isOver: monitor.isOver()
    }), drop: ({type, _id, name, image, price, fat, proteins, carbohydrates, calories}) => {
      dropHandler(type, _id, name, image, price, fat, proteins, carbohydrates, calories)
    }
  })
  const burgerObject = useSelector(store => store.burgerConstructor.burgerObject);
  const orderNumber = useSelector(store => store.orderDetails.orderNumber);

  const fetchOrderNumber = () => {
    const ingredientsAndBunsIdsList = [
      burgerObject.bun._id, ...burgerObject.ingredients.flatMap(({_id}) => _id), burgerObject.bun._id
    ];
    getOrderNumber(ingredientsAndBunsIdsList)
      .then(orderData => {
        dispatch({
          type: "SET_ORDER_DETAILS", payload: orderData.order.number
        })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        dispatch({
          type: "REMOVE_ALL_INGREDIENTS"
        })
      })
  }

  const isBurgerObjectEmpty = () => {
    return Object.keys(burgerObject.bun).length === 0 && Object.keys(burgerObject.ingredients).length === 0;
  }
  const disableButton = isBurgerObjectEmpty();

  const burgerConstructorIngredients = [
    burgerObject.bun, ...burgerObject.ingredients.flatMap(ingredient => ingredient), burgerObject.bun
  ];

  const totalPrice = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, item) => {
      if (item.type === 'bun') {
        return sum + item.price * 2;
      }

      return sum + item.price;
    }, 0);
  }, [burgerConstructorIngredients]);

  return <div className={styles.constructor}>
    <ul className={styles.mainList}
        ref={dropTarget}
        style={isOver ? {outlineStyle: "solid"} : null}>
      {Object.entries(burgerObject.bun).length === 0 ? null : <li className="ml-8" style={{cursor: "pointer"}}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${burgerObject.bun.name} (верх)`}
          price={burgerObject.bun.price}
          thumbnail={burgerObject.bun.image}
        />
      </li>}
      <li>
        <ul className={styles.list}>
          {burgerObject.ingredients.map(({newId, name, price, image}) => {
            return <li key={newId} className={styles.item}>
              <div className="mr-2">
                <DragIcon type="primary"/>
              </div>
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                handleClose={() => {
                  dispatch({
                    type: "REMOVE_INGREDIENT", newId, price
                  })
                }}
              />
            </li>
          })}
          <div>
            {orderNumber &&
              <Modal
                onClose={() => {
                  dispatch({
                    type: "REMOVE_ORDER_DETAILS"
                  })
                }}>
                <OrderDetails/>
              </Modal>}
          </div>
        </ul>
      </li>
      {Object.entries(burgerObject.bun).length === 0 ? null : <li className="ml-8" style={{cursor: "pointer"}}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${burgerObject.bun.name} (верх)`}
          price={burgerObject.bun.price}
          thumbnail={burgerObject.bun.image}
        />
      </li>}
    </ul>
    <div className={styles.bottom}>
      <div
        className="mr-10"
        style={{display: "flex", alignItems: "center"}}
      >
        <div className="mr-2 text text_type_digits-medium">{totalPrice ? totalPrice : 0}</div>
        <div className={styles.svgWrapper}>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
      <Button
        onClick={() => {
          fetchOrderNumber()
        }}
        htmlType="button"
        type="primary"
        size="large"
        disabled={disableButton}
      >
        Оформить заказ
      </Button>
    </div>
  </div>;
};

export default BurgerConstructor;
