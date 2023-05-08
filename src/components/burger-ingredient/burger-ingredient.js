import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../services/slices/ingredient-details-slice";

const BurgerIngredient = ({ ingredient }) => {

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const {bun, ingredients} = useSelector(store => store.burgerConstructor);
  const burgerConstructorIngredients = [
    bun, ...ingredients.flatMap(ingredient => ingredient), bun
  ];

  const handleOpenIngredientDetails = () => {
    dispatch(set(ingredient))
  }

  const countIngredient = useMemo(() => {
    return burgerConstructorIngredients.reduce((sum, el) => {
      if (!el) {
        return sum;
      }
      if (el._id === ingredient._id) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  }, [burgerConstructorIngredients, ingredient._id]);

  return (
    <li
      onClick={ handleOpenIngredientDetails }
      style={
        isDragging
          ? { backgroundColor: "var(--colors-interface-accent)" }
          : null
      }
      ref={dragRef}
      className={styles.item}
    >
      {countIngredient > 0
      ? <Counter count={countIngredient} size="default" extraClass="m-1" />
      : null}

      <img
        className={styles.image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div style={{ display: "flex" }}>
        <p className={"text text_type_digits-default pb-1 pr-2"}>
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p
        style={{ textAlign: "center", paddingBottom: 24 }}
        className={"text text_type_main-default"}
      >
        {ingredient.name}
      </p>
    </li>
  );
};

export default BurgerIngredient;
