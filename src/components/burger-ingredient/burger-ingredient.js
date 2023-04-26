import styles from "./burger-ingredient.module.css";
import {useDrag} from "react-dnd";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo} from "react";
import {useSelector} from "react-redux";

const BurgerIngredient = ({
                            product,
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

  const burgerObject = useSelector(store => store.burgerConstructor.burgerObject);
  const burgerConstructorIngredients = [burgerObject.bun, ...burgerObject.ingredients.flatMap(ingredient => ingredient), burgerObject.bun];

  const countIngredient = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, ingredient) => {
      if (ingredient.type === 'bun' && _id === ingredient._id) {
        return sum + 2;
      } else if (ingredient._id === product._id) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  }, [product, burgerConstructorIngredients, _id]);

  return <li
    onClick={() => {
      setIsVisibleModal(true);
      setSelectedIngredientId(_id);
      changeModalContent('ingredient-details')
    }}
    style={isDragging ? {backgroundColor: "var(--colors-interface-accent)"} : null}
    ref={dragRef}
    className={styles.item}>
    <Counter count={countIngredient} size="default" extraClass="m-1"/>
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
