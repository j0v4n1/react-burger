// стили
import styles from "./burger-constructor.module.css";
// доп функции
import orderNumberContext from "../../utils/order-number-context";
import getOrderNumber from "../../utils/order-api";
// компоненты
import Modal from "../modal/modal";
// библиотеки
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { setIngredient } from "../../services/actions/set-ingredient";

const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const dropHandler = (type, id) => {
    dispatch(setIngredient(type, id))
  }

  const [dropTarget] = useDrop({
    accept: "bun",
    drop(ingredientId) {
      dropHandler("bun", ingredientId)
    }
  })

  const ingredients = useSelector(state => state.burgerIngredients.ingredients)
  const burger = useSelector(state => state.burgerConstructor.burgerObject)

  const [selectedIngredientId, setSelectedIngredientId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const burgerObject = {
    bun: ingredients.find(({type}) => type === "bun"),
    ingredients: ingredients.filter(({type, price}) => {
        return type !== 'bun' && price < 1000
      })
  }

  const fetchOrderNumber = () => {
    const ingredientsAndBunsIdsList = [
      burgerObject.bun._id, ...burgerObject.ingredients.flatMap(({_id}) => _id), burgerObject.bun._id
    ];
    getOrderNumber(ingredientsAndBunsIdsList)
      .then(orderData => {
        dispatch({
          type: "SET_ORDER_DETAILS",
          number: orderData.order.number,
          name: orderData.name
        })
      })
      .then(() => {
        setIsVisibleModal(true);
      })
  }

  function changeModalContent(modalElement) {
    setModalContent(modalElement)
  }

  return <div className={styles.constructor}>
    <ul className={styles.mainList}>
      {Object.entries(burger.bun).length === 0 ? null :
        <li className="ml-8"
            onClick={() => {
              setIsVisibleModal(true);
              setSelectedIngredientId(burger.bun._id);
              changeModalContent('ingredient-details')
            }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burger.bun.name} (верх)`}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        </li>}
      <li>
        <ul className={styles.list}>
          {burger.ingredients.map(({_id, name, price, image}) => {
            return <li key={_id} className={styles.item}
                       onClick={() => {
                         setIsVisibleModal(true);
                         setSelectedIngredientId(_id);
                         changeModalContent('ingredient-details')
                       }}>
              <div className="mr-2">
                <DragIcon type="primary"/>
              </div>
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
            </li>
          })}
          <div>
            <Modal data={ingredients}
                    setIsVisibleModal={setIsVisibleModal}
                    isVisibleModal={isVisibleModal}
                    selectedIngredientId={selectedIngredientId}
                    modalContent={modalContent}
                    onClose={() => {
                      setIsVisibleModal(false)
                    }}/>
          </div>
        </ul>
      </li>
      {Object.entries(burger.bun).length === 0 ? null :
        <li className="ml-8"
            onClick={() => {
              setIsVisibleModal(true);
              setSelectedIngredientId(burger.bun._id);
              changeModalContent('ingredient-details')
            }}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${burger.bun.name} (верх)`}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        </li>}
    </ul>
    <div className={styles.bottom}>
      <div
        className="mr-10"
        style={{display: "flex", alignItems: "center"}}
      >
        <div className="mr-2 text text_type_digits-medium">610</div>
        <div className={styles.svgWrapper}>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
      <Button
        onClick={() => {
          changeModalContent('order-details');
          fetchOrderNumber()
        }}
        htmlType="button"
        type="primary"
        size="large"
      >
        Оформить заказ
      </Button>
    </div>
  </div>;
};

export default BurgerConstructor;
