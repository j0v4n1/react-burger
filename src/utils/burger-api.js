import checkResponse from "./check-response";

function getIngredients() {
  return fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then((res) => {
      return checkResponse(res)
    })
}

export default getIngredients;
