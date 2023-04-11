import getIngredients from "../../utils/burger-api";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: "GET_INGREDIENTS"
    })

  getIngredients()
    .then(result => {
      dispatch({
        type: "GET_INGREDIENTS_SUCCESS",
        ingredients: result.data
      })
    })
    .catch(() => {
      dispatch({
        type: "GET_INGREDIENTS_FAILED"
      })
    })
  }
}
