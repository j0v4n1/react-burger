import {
  connectionSuccess as connectionSuccessFeed,
  connectionError as connectionErrorFeed,
  getMessages as getMessagesFeed,
} from '../services/slices/websocketFeed';
import {
  connectionSuccess as connectionSuccessHistoryOrder,
  connectionError as connectionErrorHistoryOrder,
  getMessages as getMessagesHistoryOrder,
} from '../services/slices/websocket-history-orders';

export const GET_INGREDIENTS_URL =
  'https://norma.nomoreparties.space/api/ingredients';
export const GET_ORDER_NUMBER_URL =
  'https://norma.nomoreparties.space/api/orders';
export const REGISTRATION_URL =
  'https://norma.nomoreparties.space/api/auth/register';
export const AUTHORIZATION_URL =
  'https://norma.nomoreparties.space/api/auth/login';
export const LOGOUT_URL = 'https://norma.nomoreparties.space/api/auth/logout';
export const REFRESH_TOKEN_URL =
  'https://norma.nomoreparties.space/api/auth/token';
export const PROFILE_URL = 'https://norma.nomoreparties.space/api/auth/user';
export const RESET_PASSWORD_URL =
  'https://norma.nomoreparties.space/api/password-reset';
export const SET_NEW_PASSWORD_URL =
  'https://norma.nomoreparties.space/api/password-reset/reset';
export const DEFAULT_HEADERS = { 'Content-type': 'application/json' };
export const WS_ALL_ORDERS_LIST = 'wss://norma.nomoreparties.space/orders/all';
export const WS_HISTORY_ORDERS_LIST = 'wss://norma.nomoreparties.space/orders';
export const INGREDIENT_TYPE = 'ingredient';
export const BURGER_CONSRTUCTOR_INGREDIENT_TYPE = 'burgerConstructorIngredient';
export const WS_FEED_ACTIONS = {
  connectionStart: 'websocketFeed/connectionStart',
  connectionSuccess: connectionSuccessFeed,
  getMessages: getMessagesFeed,
  connectionError: connectionErrorFeed,
  connectionClose: 'websocketFeed/connectionClose',
};
export const WS_HISTORY_ORDERS_ACTIONS = {
  connectionStart: 'websocketHistoryOrders/connectionStart',
  connectionSuccess: connectionSuccessHistoryOrder,
  getMessages: getMessagesHistoryOrder,
  connectionError: connectionErrorHistoryOrder,
  connectionClose: 'websocketHistoryOrders/connectionClose',
};
