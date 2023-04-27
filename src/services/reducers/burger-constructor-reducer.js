import {SET_INGREDIENT, SET_INGREDIENT_BUN, REMOVE_INGREDIENT, REMOVE_ALL_INGREDIENTS} from "../actions/set-ingredient";

const initialState = {
  burgerObject: {
    bun: {},
    ingredients: []
  }
};

const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_BUN:
      return {
        ...state, burgerObject: {
          ...state.burgerObject, bun: {...action, type: undefined}
        }
      }
    case SET_INGREDIENT:
      return {
        ...state, burgerObject: {
          ...state.burgerObject,
          ingredients: [...state.burgerObject.ingredients, {...action, type: undefined},]
        }
      }
    case REMOVE_INGREDIENT:
      const ingredients = state.burgerObject.ingredients.filter(ingredient => ingredient.newId !== action.newId);
      return {
        ...state, burgerObject: {
          ...state.burgerObject,
          ingredients
        }
      }
    case REMOVE_ALL_INGREDIENTS:
      return {
        ...state, burgerObject: {
          bun: {},
          ingredients: []
        }
      }
    default:
      return state
  }
}

export default burgerConstructorReducer;
