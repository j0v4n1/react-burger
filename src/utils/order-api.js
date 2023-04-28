import checkResponse from "./check-response";
import { getOrderNumberURL } from "../constants/constants";

function getOrderNumber(ingredientsList) {
  return fetch(getOrderNumberURL, {
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
