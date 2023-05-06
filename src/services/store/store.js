import { configureStore } from "@reduxjs/toolkit";
import burgerConstructor from "../../components/burger-constructor/burger-constructor-slice";
import burgerIngredients from "../../components/burger-ingredients/burger-ingredients-slice";
import orderDetails from "../../components/order-details/order-details-slice";
import ingredientDetails from "../../components/ingredient-details/ingredient-details-slice";

const store = configureStore({
  reducer: {
    burgerConstructor,
    burgerIngredients,
    orderDetails,
    ingredientDetails,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
