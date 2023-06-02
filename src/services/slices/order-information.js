import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentOrder: null,
};

const orderInformation = createSlice({
  name: 'orderInformation',
  initialState,
  reducers: {
    set: (state, action) => {
      state.currentOrder = action.payload;
    },
    remove: (state) => {
      state.currentOrder = null;
    },
  },
});

const { actions, reducer } = orderInformation;
export default reducer;
export const { set, remove } = actions;
