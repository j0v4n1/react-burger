import styles from './order-details.module.css';
import done from '../../images/done.png'
import { useSelector } from 'react-redux';

const OrderDetails = () => {

  const orderNumber = useSelector(store => store.orderDetails.order.number)

  return (
    <div className={styles.wrapper}>
      <h3 className='mt-30 text text_type_digits-large'>{orderNumber}</h3>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className='mt-15 mb-15' src={done} alt="Готово"/>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default mt-2 mb-30 text_color_inactive">Дождитесь готовности на орбитальной
        станции</p>
    </div>
  )
}

export default OrderDetails;