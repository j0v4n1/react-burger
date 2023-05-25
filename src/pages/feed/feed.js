import styles from './feed.module.css';
import Order from "../../components/order/order";

const Feed = () => {
  return (
    <section className={styles['feed']}>
      <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
      <div className={styles['feed__orders']}>
        <ul className={styles['feed__orders-list']}>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </ul>
        <div className={styles['feed__orders-information-wrapper']}>
          <div className={styles['feed__orders-information']}>
            <div className={styles['feed__orders-ready']}>
              <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
              <ul className={styles['feed__orders-ready-list']}>
                <li className={`text text_type_digits-default ${styles['feed__orders-ready-list-item']}`}>034533</li>
                <li className={`text text_type_digits-default ${styles['feed__orders-ready-list-item']}`}>034533</li>
                <li className={`text text_type_digits-default ${styles['feed__orders-ready-list-item']}`}>034533</li>
                <li className={`text text_type_digits-default ${styles['feed__orders-ready-list-item']}`}>034533</li>
                <li className={`text text_type_digits-default ${styles['feed__orders-ready-list-item']}`}>034533</li>
              </ul>
            </div>
            <div className={styles['feed__orders-pending']}>
              <h3 className="text text_type_main-medium mb-6">В работе:</h3>
              <ul className={styles['feed__orders-pending-list']}>
                <li className='text text_type_digits-default mb-2'>034533</li>
                <li className='text text_type_digits-default mb-2'>034533</li>
                <li className='text text_type_digits-default mb-2'>034533</li>
              </ul>
            </div>
          </div>
          <h3 className='text text_type_main-medium mt-15'>Выполнено за все время:</h3>
          <div className={`text text_type_digits-large ${styles['feed__orders-ready-all-number']}`}>28 752</div>
          <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
          <div className={`text text_type_digits-large ${styles['feed__orders-ready-today-number']}`}>138</div>
        </div>
      </div>
    </section>
  )
}
export default Feed;