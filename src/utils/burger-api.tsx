import checkResponse from './check-response';
import { GET_INGREDIENTS_URL } from '../constants/constants';
import { IIngredientsData } from '../types';

function getIngredients(): Promise<IIngredientsData> {
  return fetch(GET_INGREDIENTS_URL).then((res) => {
    return checkResponse(res);
  });
}

export default getIngredients;
