import styles from './feed.module.css';
import Order from "../order/order";
const Feed = () => {
  return (
    <main className={styles.feed}>
      <h2>Лента заказов</h2>
      <div>
        <ul>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
        </ul>
      </div>
    </main>
  )
}
export default Feed;
