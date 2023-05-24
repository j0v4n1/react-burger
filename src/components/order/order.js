import styles from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const Order = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  return (
    <li className={styles['order']}>
      <Link style={{textDecoration: 'none', color: 'inherit'}} to='/feed/orderId'>
      <div className={styles['order__number-and-date']}>
        <p className='text text_type_digits-default'>#034535</p>
        <p className='text text_type_main-small text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h3 className={`text text_type_main-medium ${styles['order__name']}`}>Death Star Starship Main бургер</h3>
      <div className={styles['order__images-and-price']}>
        <ul className={styles['order__images-list']}>
          <li style={{zIndex: 6}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[0].image} alt="" /></li>
          <li style={{zIndex: 5}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[1].image} alt="" /></li>
          <li style={{zIndex: 4}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[2].image} alt="" /></li>
          <li style={{zIndex: 3}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[3].image} alt="" /></li>
          <li style={{zIndex: 2}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[4].image} alt="" /></li>
          <li style={{zIndex: 1}} className={styles['order__images-item']}><img className={styles['order__image']} src={ingredients[5].image} alt="" /></li>
        </ul>
        <div className={styles['order__icon-and-price']}>
          <div className={`text text_type_digits-default ${styles['order__price']}`}>480</div>
          <CurrencyIcon  type="primary"/>
        </div>
      </div>
      </Link>
    </li>
  )
}

export default Order;
