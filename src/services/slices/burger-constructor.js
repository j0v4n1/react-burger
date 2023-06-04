import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const setIngredient = (ingredient) => {
  return function (dispatch) {

    const uniqueId = uuidv4();

    if (ingredient.type === "bun") {
      dispatch(addBun({...ingredient, uniqueId}));
    } else {
      dispatch(addIngredient({...ingredient, uniqueId}));
    }

  };
};

const initialState = {
  bun: null,
  ingredients: [],
  log: null
};

const burgerConstructor = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addBun: (state, action) => {
      state.bun = action.payload;
    },
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter((ingredient) => {
        return ingredient.uniqueId !== action.payload;
      });
    },
    removeAllIngredients: (state) => {
      state.bun = null;
      state.ingredients = [];
    },
    reOrder: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const dragIngredient = state.ingredients[dragIndex];
      state.ingredients[dragIndex] = state.ingredients[hoverIndex];
      state.ingredients[hoverIndex] = dragIngredient;
    }
  }
});

const { actions, reducer } = burgerConstructor;

export default reducer;

export const { addBun, addIngredient, removeIngredient, removeAllIngredients, reOrder } =
  actions;
