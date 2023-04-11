const initialState = {
  currentIngredient: {}
}

const openedIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INGREDIENT_DETAILS":
      return {
        ...state,
        currentIngredient: action.ingredient
      }
      default:
        return state
    }
}

export default openedIngredientReducer;
