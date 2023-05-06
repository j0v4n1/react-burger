import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  ingredients: [],
};

const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addBun: (state, action) => {
      state.bun = action.payload;
    },
  },
  addIngredient: (state, action) => {
    state.ingredients.push(action.payload);
  },
  removeIngredient: (state, action) => {
    state.ingredients = state.ingredients.filter((ingredient) => {
      ingredient.newId !== action.payload;
    });
  },
  removeAllIngredients: (state) => {
    state.bun = null;
    state.ingredients = [];
  },
});

const { actions, reducer } = burgerConstructorSlice;

export default reducer;

export const { addBun, addIngredient, removeIngredient, removeAllIngredients } =
  actions;
