import update from 'immutability-helper';
import styles from './burger-constructor.module.css';
import getOrderNumber from '../../utils/order-api';
import Modal from '../modal/modal';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useMemo, useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import OrderDetails from '../order-details/order-details';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';
import { set, remove } from '../../services/slices/order-details';
import {
  removeAllIngredients,
  setIngredient,
} from '../../services/slices/burger-constructor';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/spinner';

const BurgerConstructor = () => {
  const [loadingOrder, setLoadingOrder] = useState(false);

  const dispatch = useDispatch();

  const { ingredients, bun } = useSelector((store) => store.burgerConstructor);
  const accessToken = useSelector((store) => store.profile.accessToken);

  const handleRemoveOrder = () => {
    dispatch(remove());
  };

  const burgerConstructorIngredients = [
    bun,
    ...ingredients.flatMap((ingredient) => ingredient),
    bun,
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
    accept: 'ingredient',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: ({ ingredient }) => {
      dropHandler(ingredient);
    },
  });

  const isLoggedIn = useSelector((store) => store.profile.isLoggedIn);
  const orderNumber = useSelector((store) => store.orderDetails.orderNumber);
  const navigate = useNavigate();

  const fetchOrderNumber = () => {
    setLoadingOrder(true);
    setTimeout(() => {
      if (isLoggedIn) {
        const ingredientsAndBunsIdsList = [
          bun._id,
          ...ingredients.flatMap(({ _id }) => _id),
          bun._id,
        ];
        getOrderNumber(ingredientsAndBunsIdsList, accessToken)
          .then((orderData) => {
            dispatch(set(orderData.order.number));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            dispatch(removeAllIngredients());
            setLoadingOrder(false);
          });
      } else {
        navigate('/login');
      }
    }, 15000);
  };

  const totalPrice = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, item) => {
      if (item && item.price) {
        return sum + item.price;
      }
      return sum;
    }, 0);
  }, [burgerConstructorIngredients]);

  return (
    <section className={styles.constructor}>
      <ul
        className={styles.mainList}
        ref={dropTarget}
        style={isOver ? { outlineStyle: 'solid' } : null}>
        {loadingOrder ? (
          <>
            <h2 style={{ textAlign: 'center' }}>
              Ваш заказ готовится, ожидайте...
            </h2>
            <Spinner height={'auto'} />
          </>
        ) : (
          <>
            {!bun ? null : (
              <li className="ml-8" style={{ cursor: 'pointer' }}>
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
                {ingredients.map((ingredient) => {
                  return (
                    <BurgerConstructorIngredient
                      key={ingredient.uniqueId}
                      ingredient={ingredient}
                    />
                  );
                })}
                <div>
                  {orderNumber && (
                    <Modal onClose={handleRemoveOrder}>
                      <OrderDetails />
                    </Modal>
                  )}
                </div>
              </ul>
            </li>
            {!bun ? null : (
              <li className="ml-8" style={{ cursor: 'pointer' }}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              </li>
            )}
          </>
        )}
      </ul>
      <div className={styles.bottom}>
        <div
          className="mr-10"
          style={{ display: 'flex', alignItems: 'center' }}>
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
          size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
