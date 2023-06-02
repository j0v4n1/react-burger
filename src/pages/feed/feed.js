import styles from './feed.module.css';
import Order from '../../components/order/order';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  connectionClose,
  connectionStart,
} from '../../services/slices/websocketFeed';
import Spinner from '../../components/spinner/spinner';

const Feed = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(
    (store) => store.websocketFeed.messages
  );
  const { loading } = useSelector((store) => store.websocketFeed);
  const ordersList = orders
    ? orders.map((order) => {
        return <Order key={order._id} order={order} />;
      })
    : null;

  const checkOrderStatus = (status, className) => {
    return orders
      ? orders.map((order, index) => {
          return order.status === status && index <= 9 ? (
            <li key={order._id} className={className}>
              {order.number}
            </li>
          ) : null;
        })
      : null;
  };

  const readyOrders = checkOrderStatus(
    'done',
    `text text_type_digits-default ${styles['feed__orders-ready-list-item']}`
  );
  const pendingOrders = checkOrderStatus(
    'pending',
    'text text_type_digits-default mb-2'
  );

  useEffect(() => {
    dispatch(connectionStart());

    return () => {
      dispatch(connectionClose());
    };
  }, []);

  return loading ? (
    <Spinner height={'calc(100vh - 128px)'} />
  ) : (
    <section className={styles['feed']}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <div className={styles['feed__orders']}>
        <ul className={styles['feed__orders-list']}>{ordersList}</ul>
        <div className={styles['feed__orders-information-wrapper']}>
          <div className={styles['feed__orders-information']}>
            <div className={styles['feed__orders-ready']}>
              <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
              <ul className={styles['feed__orders-ready-list']}>
                {readyOrders}
              </ul>
            </div>
            <div className={styles['feed__orders-pending']}>
              <h3 className="text text_type_main-medium mb-6">В работе:</h3>
              <ul className={styles['feed__orders-pending-list']}>
                {pendingOrders}
              </ul>
            </div>
          </div>
          <h3 className="text text_type_main-medium mt-15">
            Выполнено за все время:
          </h3>
          <div
            className={`text text_type_digits-large ${styles['feed__orders-ready-all-number']}`}>
            {total}
          </div>
          <h3 className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </h3>
          <div
            className={`text text_type_digits-large ${styles['feed__orders-ready-today-number']}`}>
            {totalToday}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feed;
