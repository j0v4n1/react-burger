import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsConnected: false,
  orders: [],
  error: undefined,
};

const websocketHistoryOrders = createSlice({
  name: "wsHistoryOrders",
  initialState,
  reducers: {
    getMessages: (state, action) => {
      state.orders = action.payload;
    },
  },
});

const { actions, reducer } = websocketHistoryOrders;
export default reducer;
export const { getMessages } = actions;
