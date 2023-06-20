import Order from '../../components/order/order';
import styles from './orders.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectionClose, connectionStart } from '../../services/slices/websocket-history-orders';
import Spinner from '../../components/spinner/spinner';
import { Route, Routes } from 'react-router-dom';
import OrderInformation from '../order-information/order-information';
import Modal from '../../components/modal/modal';
import { remove } from '../../services/slices/order-information';

const Orders = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.profile.accessToken);
  const { orders } = useSelector((store) => store.websocketHistoryOrders.messages);
  const { loading } = useSelector((store) => store.websocketHistoryOrders);

  const handleCloseOrderInformation = () => {
    dispatch(remove());
  };

  useEffect(() => {
    dispatch(connectionStart({ accessToken }));

    return () => {
      dispatch(connectionClose());
    };
  }, [accessToken]);

  const ordersList = orders
    ? orders
        .map((order) => {
          return <Order path={'/profile/orders/'} key={order._id} order={order} />;
        })
        .reverse()
    : null;

  return loading ? (
    <Spinner height={'calc(100vh - 128px)'} />
  ) : (
    <>
      <ul className={styles['profile__orders']}>{ordersList}</ul>
      <Routes>
        <Route
          path="/:id"
          element={
            <Modal closeModalPath={'/profile/orders'} onRemove={handleCloseOrderInformation}>
              <OrderInformation closeModalPath={'profile/orders'} />
            </Modal>
          }
        />
      </Routes>
    </>
  );
};
export default Orders;
