import { combineReducers } from "redux";
import burgerConstructor from "../../components/burger-constructor/burger-constructor-slice";
import burgerIngredients from "../../components/burger-ingredients/burger-ingredients-slice";
import orderDetails from "../../components/order-details/order-details-slice";
import ingredientDetails from "../../components/ingredient-details/ingredient-details-slice";

const rootReducer = combineReducers({
  burgerIngredients,
  burgerConstructor,
  ingredientDetails,
  orderDetails,
});

export default rootReducer;
