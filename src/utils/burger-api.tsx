import checkResponse from './check-response';
import { GET_INGREDIENTS_URL } from '../constants/constants';
import { IIngredientsData } from '../types';

const getIngredients = async (): Promise<IIngredientsData> => {
  const res = await fetch(GET_INGREDIENTS_URL);
  return await checkResponse(res);
};

export default getIngredients;
