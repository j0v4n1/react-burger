import {v4 as uuidv4} from 'uuid';

export const setIngredient = (ingredientType, _id, name, image, price, fat, proteins, carbohydrates, calories) => {
  return function (dispatch) {

    const newId = uuidv4();

    let counterIngredient = 0;

    if (ingredientType === "bun") {
      dispatch({
        type: "SET_INGREDIENT_BUN",
        _id,
        name,
        newId,
        image,
        price,
        fat,
        proteins,
        carbohydrates,
        calories,
        ingredientType,
        counter: 2
      })
    } else {
      dispatch({
        type: "SET_INGREDIENT",
        _id,
        name,
        newId,
        image,
        price,
        fat,
        proteins,
        carbohydrates,
        calories,
        ingredientType,
        counterIngredient: counterIngredient + 1
      })
    }
  }
}
