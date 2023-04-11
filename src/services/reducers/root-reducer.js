import {combineReducers} from "redux";
import burgerIngredientsReducer from "./burger-ingredients-reducer";
import burgerConstructorReducer from "./burger-constructor-reducer";
import openedIngredientReducer from "./opened-ingredient-reducer";
import orderDetailsReducer from "./order-details-reducer";

const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  openedIngredient: openedIngredientReducer,
  orderDetails: orderDetailsReducer

})

export default rootReducer;
