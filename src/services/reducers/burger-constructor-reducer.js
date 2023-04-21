const initialState = {
  burgerObject: {
    bun: {}, ingredients: [], totalCost: 0
  }
};

const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INGREDIENT_BUN":
      return {
        ...state, burgerObject: {
          ...state.burgerObject, bun: {...action, type: undefined}, totalCost: action.price * 2
        }
      }
    case "SET_INGREDIENT":
      return {
        ...state, burgerObject: {
          ...state.burgerObject,
          ingredients: [...state.burgerObject.ingredients, {...action, type: undefined},],
          totalCost: state.burgerObject.totalCost + action.price
        }
      }
    case "REMOVE_INGREDIENT":
      const ingredients = state.burgerObject.ingredients.filter(ingredient => ingredient.newId !== action.newId);
      return {
        ...state, burgerObject: {
          ...state.burgerObject, ingredients, totalCost: state.burgerObject.totalCost - action.price
        }
      }
    case "REMOVE_ALL_INGREDIENTS":
      return {
        ...state, burgerObject: {
          bun: {}, ingredients: [], totalCost: 0
        }
      }
    default:
      return state
  }
}

export default burgerConstructorReducer;
