import checkResponse from "./check-response";
import { getIngredientsURL } from "../constants/constants";

function getIngredients() {
  return fetch(getIngredientsURL).then((res) => {
    return checkResponse(res);
  });
}

export default getIngredients;
