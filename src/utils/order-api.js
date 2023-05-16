import checkResponse from "./check-response";
import { GET_ORDER_NUMBER_URL } from "../constants/constants";

function getOrderNumber(ingredientsList) {
  return fetch(GET_ORDER_NUMBER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export default getOrderNumber;
