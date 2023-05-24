import styles from './order-information.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
const OrderInformation = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  return (
    <article>
      <p>#034533</p>
      <h3>Black Hole Singularity острый бургер</h3>
      <p>Выполнен</p>
      <h4>Состав:</h4>
      <ul>
        <li>
          <img src={ingredients[0].image} alt=""/>
          <p>Флюоресцентная булка R2-D3</p>
          <div>
            <div>2</div>
            <div>x</div>
            <div>20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
      </ul>
    </article>
  )
}

export default OrderInformation;
