import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIngredient: null,
  showModal: false
};

const ingredientDetails = createSlice({
  name: "ingredientDetails",
  initialState,
  reducers: {
    set: (state, action) => {
      state.currentIngredient = action.payload;
    },
    remove: (state) => {
      state.currentIngredient = null;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    }
  },
});

const { actions, reducer } = ingredientDetails;
export default reducer;
export const { set, remove, setShowModal } = actions;
