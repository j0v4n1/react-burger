import { SET_INGREDIENT, SET_INGREDIENT_BUN } from "../constants/constants";

export const setIngredient = (type, id) => {
  return function (dispatch) {
    if (type === 'bun') {
      dispatch({
        type: SET_INGREDIENT_BUN,
        id: id
      })
    } else {
      dispatch({
        type: SET_INGREDIENT,
        id: id
      })
    }
  }
}
