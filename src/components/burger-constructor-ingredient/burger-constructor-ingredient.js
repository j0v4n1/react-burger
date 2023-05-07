import styles from "../burger-constructor-ingredient/burger-constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { removeIngredient } from "../burger-constructor/burger-constructor-slice";

const BurgerConstructorIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const handleRemoveIngredient = () => {
    dispatch(removeIngredient(ingredient.uniqueId))
  }
  return (
    <li key={ingredient.uniqueId} className={styles.item}>
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleRemoveIngredient}
      />
    </li>
  );
};

export default BurgerConstructorIngredient;
