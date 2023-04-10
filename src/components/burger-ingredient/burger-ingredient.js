import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredient = ({id, name, image, price, type, setIsVisibleModal, setSelectedIngredientId, changeModalContent}) => {

  const [{isDrag}, dragRef] = useDrag({
    type: type,
    item: {id},
  })

  let counter = 0;

  return (
    !isDrag &&
    <li
    onClick={() => {
      setIsVisibleModal(true);
      setSelectedIngredientId(id);
      changeModalContent('ingredient-details')
    }}
      ref={dragRef}
      className={styles.item}>
      {counter > 0 ? <Counter count={counter} size="default" extraClass="m-1"/> : null}
      <img className={styles.image} src={image} alt={name}/>
      <div style={{display: "flex"}}>
        <p className={"text text_type_digits-default pb-1 pr-2"}>
          {price}
        </p>
        <CurrencyIcon type="primary"/>
      </div>
      <p
        style={{textAlign: "center", paddingBottom: 24}}
        className={"text text_type_main-default"}
      >
        {name}
      </p>
    </li>
  )
}

export default BurgerIngredient;
