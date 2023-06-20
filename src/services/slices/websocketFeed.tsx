import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  websocketState: 'closed',
  connectionStarted: false,
  wsConnected: false,
  messages: [],
  error: undefined,
};

const websocketFeed = createSlice({
  name: 'websocketFeed',
  initialState,
  reducers: {
    connectionStart: (state) => {
      state.connectionStarted = true;
    },
    connectionSuccess: (state, action) => {
      state.loading = false;
      state.wsConnected = true;
      state.websocketState = action.payload;
    },
    getMessages: (state, action) => {
      state.messages = action.payload;
    },
    connectionError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    connectionClose: (state) => {
      state.loading = true;
      state.wsConnected = false;
      state.websocketState = 'closed';
      state.connectionStarted = false;
    },
  },
});

const { actions, reducer } = websocketFeed;
export default reducer;
export const { connectionStart, connectionSuccess, getMessages, connectionError, connectionClose } = actions;
