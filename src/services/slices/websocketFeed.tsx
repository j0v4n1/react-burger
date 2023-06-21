import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOrder, IWebsocketFeedState } from '../../types';

const initialState: IWebsocketFeedState = {
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
    connectionSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.wsConnected = true;
      state.websocketState = action.payload;
    },
    getMessages: (state, action: PayloadAction<IOrder[]>) => {
      state.messages = action.payload;
    },
    connectionError: (state, action: PayloadAction<string>) => {
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
