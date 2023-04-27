import styles from "./burger-ingredient.module.css";
import {useDrag} from "react-dnd";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

const BurgerIngredient = ({ingredient}) => {

  const [{isDragging}, dragRef] = useDrag({
    type: "ingredient",
    item: {
      _id: ingredient._id,
      newId: ingredient.newId,
      name: ingredient.name,
      image: ingredient.image,
      price: ingredient.price,
      fat: ingredient.fat,
      calories: ingredient.calories,
      carbohydrates: ingredient.carbohydrates,
      proteins: ingredient.proteins,
      type: ingredient.type
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const burgerObject = useSelector(store => store.burgerConstructor.burgerObject);

  const burgerConstructorIngredients = [burgerObject.bun, ...burgerObject.ingredients.flatMap(ingredient => ingredient), burgerObject.bun];

  const dispatch = useDispatch();

  const countIngredient = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, ingr) => {
      if (ingr.type === 'bun' && ingredient._id === ingr._id) {
        return sum + 2;
      } else if (ingr._id === ingredient._id) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  }, [burgerConstructorIngredients, ingredient._id]);

  return <li
    onClick={() => {
      dispatch({
        type: "SET_INGREDIENT_DETAILS",
        ingredient
      })
    }}
    style={isDragging ? {backgroundColor: "var(--colors-interface-accent)"} : null}
    ref={dragRef}
    className={styles.item}>
    <Counter count={countIngredient} size="default" extraClass="m-1"/>
    <img className={styles.image} src={ingredient.image} alt={ingredient.name}/>
    <div style={{display: "flex"}}>
      <p className={"text text_type_digits-default pb-1 pr-2"}>
        {ingredient.price}
      </p>
      <CurrencyIcon type="primary"/>
    </div>
    <p
      style={{textAlign: "center", paddingBottom: 24}}
      className={"text text_type_main-default"}
    >
      {ingredient.name}
    </p>
  </li>
}

export default BurgerIngredient;
