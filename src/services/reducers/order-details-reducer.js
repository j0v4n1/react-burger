const initialState = {
  order: {
    name: "",
    number: null
  }
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_DETAILS":
      return {
        ...state,
        order: {
          ...state.order,
          number: action.number,
          name: action.name
        }
      }
      default:
        return state
  }
}

export default orderDetailsReducer;
