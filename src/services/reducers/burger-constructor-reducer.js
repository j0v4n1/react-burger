import { SET_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENT_BUN } from "../constants/constants";

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
        ...state,
        burgerObject: {
          ...state.burgerObject,
          bun: action

        }
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: action.ingredients
      }
      default:
        return state
  }
}

export default burgerConstructorReducer;
