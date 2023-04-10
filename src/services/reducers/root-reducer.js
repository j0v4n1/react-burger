import {combineReducers} from "redux";
import burgerIngredientsReducer from "./burger-ingredients-reducer";
import burgerConstructorReducer from "./burger-constructor-reducer";
import openedIngredientReducer from "./opened-ingredient";

const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  openedIngredient: openedIngredientReducer

})

export default rootReducer;
