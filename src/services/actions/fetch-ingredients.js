import getIngredients from "../../utils/burger-api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });
    getIngredients()
      .then((result) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: result.data,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
};
