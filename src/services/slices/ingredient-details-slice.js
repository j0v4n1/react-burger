import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIngredient: null,
};

const ingredientDetailsSlice = createSlice({
  name: "ingredientDetails",
  initialState,
  reducers: {
    set: (state, action) => {
      state.currentIngredient = action.payload;
    },
    remove: (state) => {
      state.currentIngredient = null;
    },
  },
});

const { actions, reducer } = ingredientDetailsSlice;

export default reducer;

export const { set, remove } = actions;
