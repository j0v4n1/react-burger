import {SET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS} from "../actions/opened-ingredient";

const initialState = {
  currentIngredient: null
}

const openedIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: action.ingredient
      }
    case REMOVE_INGREDIENT_DETAILS:
      return {
        currentIngredient: null
      }
    default:
      return state
  }
}

export default openedIngredientReducer;
