import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: [],
};

const burgerIngredientsSlice = createSlice({
  name: "burgerIngredients",
  initialState,
  reducers: {
    getIngredients: (state) => {
      state.ingredientsRequest = true;
    },
    getIngredientsFullfilled: (state, action) => {
      state.ingredients.push(action.payload);
    },
    getIngredientsRejected: (state) => {
      state.ingredientsFailed = true;
      state.ingredientsRequest = false;
    },
  },
});
