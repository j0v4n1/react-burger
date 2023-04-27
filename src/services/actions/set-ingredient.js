import {v4 as uuidv4} from 'uuid';

export const SET_INGREDIENT_BUN = "SET_INGREDIENT_BUN";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const REMOVE_ALL_INGREDIENTS = "REMOVE_ALL_INGREDIENTS";

export const setIngredient = (ingredientType, _id, name, image, price, fat, proteins, carbohydrates, calories) => {
  return function (dispatch) {
    const newId = uuidv4();
    if (ingredientType === "bun") {
      dispatch({
        type: SET_INGREDIENT_BUN,
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
      })
    } else {
      dispatch({
        type: SET_INGREDIENT,
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
      })
    }
  }
}
