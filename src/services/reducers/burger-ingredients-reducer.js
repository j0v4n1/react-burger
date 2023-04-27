import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED} from "../actions/fetch-ingredients";

const initialState = {
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: []
};

const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredientsRequest: true,
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients
      }
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false
      }
    default:
      return state
  }
}

export default burgerIngredientsReducer;
