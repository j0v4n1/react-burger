import styles from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const Order = ({ order }) => {
  const { _id, name, createdAt, number, ingredients } = order;

  const burgerIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const currentDay = new Date();
  const yesterday = new Date(currentDay);
  yesterday.setDate(currentDay.getDate() - 1);
  const theDayBeforeYesterday = new Date(yesterday);
  theDayBeforeYesterday.setDate(currentDay.getDate() - 1);
  const reformattedDate = () => {
    if (createdAt.slice(0, 10) === currentDay.toISOString().slice(0, 10)) {
      return `Сегодня, ${createdAt.slice(11, 16)}`;
    } else if (
      createdAt.slice(0, 10) === yesterday.toISOString().slice(0, 10)
    ) {
      return `Вчера, ${createdAt.slice(11, 16)}`;
    } else if (
      createdAt.slice(0, 10) ===
      theDayBeforeYesterday.toISOString().slice(0, 10)
    ) {
      return `Позавчера, ${createdAt.slice(11, 16)}`;
    } else {
      return `${createdAt.slice(0, 10)} ${createdAt.slice(11, 16)}`;
    }
  };

  const filteredIngredients = ingredients.map((id) => {
    return burgerIngredients.find(({ _id }) => {
      return id === _id;
    });
  });

  const totalPrice = useMemo(() => {
    return filteredIngredients.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
  });

  const imageList = filteredIngredients.map((ingredient, index) => {
    return (
      <li
        key={ingredient._id.concat(index)}
        style={{ zIndex: ingredients.length - index }}
        className={styles['order__images-item']}>
        <img className={styles['order__image']} src={ingredient.image} alt="" />
      </li>
    );
  });

  return (
    <li key={_id} className={styles['order']}>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to="/feed/orderId">
        <div className={styles['order__number-and-date']}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-small text_color_inactive">
            {reformattedDate()}
          </p>
        </div>
        <h3 className={`text text_type_main-medium ${styles['order__name']}`}>
          {name}
        </h3>
        <div className={styles['order__images-and-price']}>
          <ul className={styles['order__images-list']}>{imageList}</ul>
          <div className={styles['order__icon-and-price']}>
            <div
              className={`text text_type_digits-default ${styles['order__price']}`}>
              {totalPrice}
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Order;
