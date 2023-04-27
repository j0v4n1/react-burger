import styles from "./ingredient-details.module.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const IngredientDetails = () => {

  const currentIngredient = useSelector(store => store.openedIngredient.currentIngredient);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_INGREDIENT_DETAILS",
      ingredient: currentIngredient
    })
  }, [])

  return <>
    <button
      onClick={() => {
        dispatch({
          type: "REMOVE_INGREDIENT_DETAILS"
        })
      }}
      aria-label="Закрыть"
      type="button"
      className={styles.closeButton}>
    </button>
    <div className={styles.titleWrapper}>
      <h3 className={`${styles.title} text text_type_main-large`}>
        Детали ингредиента
      </h3>
    </div>
    <img
      className={styles.image}
      src={currentIngredient.image}
      alt={currentIngredient.name}
    />
    <h4 className={`${styles.name} text text_type_main-medium`}>
      {currentIngredient.name}
    </h4>
    <div className={styles.pfcWrapper}>
      <div>
        <h5 className={`text text_type_main-default text_color_inactive`}>Калории,ккал</h5>
        <p className={'text text_type_digits-default text_color_inactive mt-2'}>
          {currentIngredient.calories}
        </p>
      </div>
      <div>
        <h5 className={`text text_type_main-default text_color_inactive`}>Белки, г</h5>
        <p className={'text text_type_digits-default text_color_inactive mt-2'}>
          {currentIngredient.proteins}
        </p>
      </div>
      <div>
        <h5 className={`text text_type_main-default text_color_inactive`}>Жиры, г</h5>
        <p className={'text text_type_digits-default text_color_inactive mt-2'}>
          {currentIngredient.fat}
        </p>
      </div>
      <div>
        <h5 className={`text text_type_main-default text_color_inactive`}>Углеводы, г</h5>
        <p className={'text text_type_digits-default text_color_inactive mt-2'}>
          {currentIngredient.carbohydrates}
        </p>
      </div>
    </div>
  </>
};

export default IngredientDetails;
