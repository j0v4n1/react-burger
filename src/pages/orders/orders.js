import Order from "../../components/order/order";
import styles from './orders.module.css'
const Orders = () => {
  return  (
    <ul className={styles['profile__orders']}>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
    </ul>
  )
}
export default Orders;
