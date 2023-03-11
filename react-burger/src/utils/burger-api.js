import checkResponse from "./checkResponse";
function getIngredients(url) {
  return fetch(`${url}/ingredients`)
    .then((res) => {
      return checkResponse(res)
    })
}

export default getIngredients;
