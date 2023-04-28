import {
  SET_ORDER_DETAILS,
  REMOVE_ORDER_DETAILS,
} from "../actions/order-details";

const initialState = {
  orderNumber: null,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderNumber: action.number,
      };
    case REMOVE_ORDER_DETAILS:
      return {
        orderNumber: null,
      };
    default:
      return state;
  }
};

export default orderDetailsReducer;
