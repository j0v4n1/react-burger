import styles from "../burger-constructor-ingredient/burger-constructor-ingredient.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../services/actions/set-ingredient";

const BurgerConstructorIngredient = ({ name, price, image, newId }) => {
  const dispatch = useDispatch();
  return (
    <li key={newId} className={styles.item}>
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => {
          dispatch({
            type: REMOVE_INGREDIENT,
            newId,
            price,
          });
        }}
      />
    </li>
  );
};

export default BurgerConstructorIngredient;
