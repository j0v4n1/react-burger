import checkResponse from './check-response';
import { GET_INGREDIENTS_URL } from '../constants/constants';

function getIngredients() {
  return fetch(GET_INGREDIENTS_URL).then((res) => {
    return checkResponse(res);
  });
}

export default getIngredients;
