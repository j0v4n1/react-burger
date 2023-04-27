import {v4 as uuidv4} from 'uuid';

export const SET_INGREDIENT_BUN = "SET_INGREDIENT_BUN";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const REMOVE_ALL_INGREDIENTS = "REMOVE_ALL_INGREDIENTS";

export const setIngredient = (ingredient) => {

  return function (dispatch) {

    const newId = uuidv4();
    
    if (ingredient.type === "bun") {
      dispatch({
        type: SET_INGREDIENT_BUN,
        _id: ingredient._id,
        name: ingredient.name,
        newId: newId,
        image: ingredient.image,
        price: ingredient.price,
        fat: ingredient.fat,
        proteins: ingredient.proteins,
        carbohydrates: ingredient.carbohydrates,
        calories: ingredient.calories,
      })
    } else {
      dispatch({
        type: SET_INGREDIENT,
        _id: ingredient._id,
        name: ingredient.name,
        newId: newId,
        image: ingredient.image,
        price: ingredient.price,
        fat: ingredient.fat,
        proteins: ingredient.proteins,
        carbohydrates: ingredient.carbohydrates,
        calories: ingredient.calories,
      })
    }
  }
}
