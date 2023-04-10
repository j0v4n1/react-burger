import { SET_ORDER_DETAILS } from "../constants/constants";

const initialState = {
  order: {
    number: null
  }
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS:
      return {
        ...state,
        order: {
          ...state.order,
          number: action.number
        }
      }
      default:
        return state
  }
}

export default orderDetailsReducer;
