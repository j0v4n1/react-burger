import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderNumber: null,
};

const orderDetails = createSlice({
  name: 'orderDetails',
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

const { actions, reducer } = orderDetails;

export default reducer;

export const { set, remove } = actions;
