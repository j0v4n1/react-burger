import { combineReducers } from "redux";
import burgerConstructor from "../slices/burger-constructor-slice";
import burgerIngredients from "../slices/burger-ingredients-slice";
import orderDetails from "../slices/order-details-slice";
import ingredientDetails from "../slices/ingredient-details-slice";
import authentication from "../slices/authentication-slice";

const rootReducer = combineReducers({
    burgerIngredients,
    burgerConstructor,
    ingredientDetails,
    orderDetails,
    authentication
});

export default rootReducer;
