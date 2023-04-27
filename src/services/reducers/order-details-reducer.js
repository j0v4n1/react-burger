const initialState = {
  orderNumber: null
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_DETAILS":
      return {
        ...state,
        orderNumber: action.payload
      }
    case "REMOVE_ORDER_DETAILS":
      return {
        orderNumber: null
      }
      default:
        return state
  }
}

export default orderDetailsReducer;
