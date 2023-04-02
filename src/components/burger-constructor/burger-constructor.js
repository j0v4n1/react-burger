import {ConstructorElement, DragIcon, Button, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import {useState, useContext, useReducer, useEffect} from "react";
import dataContext from "../../utils/data-context";
import orderNumberContext from "../../utils/order-number-context";
import getOrderNumber from "../../utils/order-api";

const BurgerConstructor = () => {

  const data = useContext(dataContext);
  const initialState = {totalIngredientsPrice: 0}
  const [selectedIngredientId, setSelectedIngredientId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [orderNumber, setOrderNumber] = useState(0);

  const burgerObject = {
    bun: data.find(({type}) => type === "bun"),
    ingredients:
      data.filter(({type, price}) => {
        return type !== 'bun' && price < 1000
      })
  }

  const fetchOrderNumber = () => {
    const ingredientsAndBunsIdsList = [
      burgerObject.bun._id, ...burgerObject.ingredients.flatMap(({_id}) => _id), burgerObject.bun._id
    ];
    getOrderNumber(ingredientsAndBunsIdsList).
    then(orderData => {
      setOrderNumber(orderData.order.number)
    })
      .then(() => {
        setIsVisibleModal(true);
      })
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'total':
        return {
          totalIngredientsPrice: !(burgerObject.bun && burgerObject.ingredients) ? null :
            burgerObject.ingredients.reduce((prevVal, val) => {
              return prevVal + val.price
            }, (burgerObject.bun.price * 2))
        }
      default:
        throw new Error(`Wrong type of action: ${action.type}`)
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function changeModalContent(modalElement) {
    setModalContent(modalElement)
  }

  useEffect(() => {
    dispatch({type: 'total'})
  }, [burgerObject.bun])

  return <div className={styles.constructor}>
    <ul className={styles.mainList}>
      {!burgerObject.bun ? null :
        <li className="ml-8"
            onClick={() => {
              setIsVisibleModal(true);
              setSelectedIngredientId(burgerObject.bun._id);
              changeModalContent('ingredient-details')
            }}>
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
          {burgerObject.ingredients.map(({_id, name, price, image}) => {
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
          <orderNumberContext.Provider value={orderNumber}>
            <div>
              <Modal data={data}
                     setIsVisibleModal={setIsVisibleModal}
                     isVisibleModal={isVisibleModal}
                     selectedIngredientId={selectedIngredientId}
                     modalContent={modalContent}
                     onClose={() => {
                       setIsVisibleModal(false)
                     }}/>
            </div>
          </orderNumberContext.Provider>
        </ul>
      </li>
      {!burgerObject.bun ? null :
        <li className="ml-8"
            onClick={() => {
              setIsVisibleModal(true);
              setSelectedIngredientId(burgerObject.bun._id);
              changeModalContent('ingredient-details')
            }}>
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
        <div className="mr-2 text text_type_digits-medium">{state.totalIngredientsPrice}</div>
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
