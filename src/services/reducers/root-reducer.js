import { combineReducers } from "redux";
import burgerConstructor from "../slices/burger-constructor-slice";
import burgerIngredients from "../slices/burger-ingredients-slice";
import orderDetails from "../slices/order-details-slice";
import ingredientDetails from "../slices/ingredient-details-slice";
import profile from "../slices/profile-slice";

const rootReducer = combineReducers({
    burgerIngredients,
    burgerConstructor,
    ingredientDetails,
    orderDetails,
    profile
});

export default rootReducer;
