import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root-reducer';
import websocketMiddleware from '../middleware/websocket-middleware';
import { WS_ALL_ORDERS_LIST, WS_FEED_ACTIONS } from '../../constants/constants';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      websocketMiddleware(WS_ALL_ORDERS_LIST, WS_FEED_ACTIONS)
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
