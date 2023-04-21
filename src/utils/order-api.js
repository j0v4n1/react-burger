import checkResponse from "./check-response";

function getOrderNumber(ingredientsList) {
  return fetch(`https://norma.nomoreparties.space/api/orders`, {
    method: 'POST', headers: {
      'Content-type': 'application/json'
    }, body: JSON.stringify({
      ingredients: ingredientsList
    })
  })
    .then((res) => {
      return checkResponse(res)
    })
}

export default getOrderNumber;
