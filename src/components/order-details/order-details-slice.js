import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: null,
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    set: (state, action) => {
      state.orderNumber = action.payload;
    },
    remove: (state) => {
      state.orderNumber = null;
    },
  },
});
