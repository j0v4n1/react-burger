import styles from './order-information.module.css';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { countTotalPrice, filterIngredients } from '../../utils/utils';
import { useMemo } from 'react';

const OrderInformation = () => {
  const order = useSelector((store) => store.orderInformation.currentOrder);
  const { createdAt, name, number, ingredients, status } = order;

  const burgerIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const flattedIngredients = filterIngredients(ingredients, burgerIngredients);

  const countById = ingredients.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  const totalPrice = useMemo(() => {
    return countTotalPrice(ingredients, burgerIngredients);
  });

  const ingredientsList = flattedIngredients.map(
    ({ _id, image, name, price }) => {
      return (
        <li key={_id} className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img
                className={styles['ingredients-item-image']}
                src={image}
                alt={name}
              />
            </div>
            <p className="text text_type_main-default">{name}</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${countById[_id]} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">
              {price}
            </div>
            <CurrencyIcon type={'primary'} />
          </div>
        </li>
      );
    }
  );

  return (
    <article className={styles['order-information']}>
      <p
        className={`text text_type_digits-default ${styles.number}`}>{`#${number}`}</p>
      <h3 className="text text_type_main-medium mt-10 mb-3">{name}</h3>
      <p style={{ color: '#00CCCC' }} className="text text_type_main-small">
        {status === 'done' ? 'Выполнено' : 'Готовится'}
      </p>
      <h4 className="text text_type_main-medium mt-15 mb-6">Состав:</h4>
      <ul className={styles['ingredients-list']}>{ingredientsList}</ul>
      <div className={styles['date-and-total-price-wrapper']}>
        <div className="ext text_type_main-small text_color_inactive">
          <FormattedDate date={new Date(createdAt)} />
        </div>
        <div className={styles['total-price']}>
          <div className="text text_type_digits-default mr-2">{totalPrice}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  );
};

export default OrderInformation;
