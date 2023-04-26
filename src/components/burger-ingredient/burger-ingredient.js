import styles from "./burger-ingredient.module.css";
import {useDrag} from "react-dnd";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo} from "react";

const BurgerIngredient = ({
                            _id,
                            newId,
                            name,
                            image,
                            price,
                            type,
                            fat,
                            calories,
                            carbohydrates,
                            proteins,
                            setIsVisibleModal,
                            setSelectedIngredientId,
                            changeModalContent
                          }) => {

  const [{isDragging}, dragRef] = useDrag({
    type: "ingredient",
    item: {_id, newId, name, image, price, fat, calories, carbohydrates, proteins, type},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return <li
    onClick={() => {
      setIsVisibleModal(true);
      setSelectedIngredientId(_id);
      changeModalContent('ingredient-details')
    }}
    style={isDragging ? {backgroundColor: "var(--colors-interface-accent)"} : null}
    ref={dragRef}
    className={styles.item}>
    <Counter count={0} size="default" extraClass="m-1"/>
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
}

export default BurgerIngredient;
