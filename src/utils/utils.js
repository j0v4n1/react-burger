import PropTypes from 'prop-types';
import { setAccessToken, setProfileName, setProfileEmail, setIsLoggedIn } from '../services/slices/profile';
const ingredientsPropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
};

export const setAuthData = (dispatch, refreshToken, accessToken, name, email) => {
  localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  dispatch(setAccessToken(accessToken));
  dispatch(setProfileName(name));
  dispatch(setProfileEmail(email));
  dispatch(setIsLoggedIn(true));
};

export const filterIngredients = (ingredients, burgerIngredients) => {
  return ingredients
    .map((id) => {
      return burgerIngredients.filter(({ _id }) => {
        return id === _id;
      });
    })
    .flat(2)
    .filter((ingredient, index, array) => {
      return !index || !array.slice(0, index).some((prevItem) => prevItem._id === ingredient._id);
    });
};

export const countTotalPrice = (ingredients, burgerIngredients) => {
  return ingredients
    .map((id) => {
      return burgerIngredients.filter(({ _id }) => {
        return id === _id;
      });
    })
    .flat(2)
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
};

export default ingredientsPropTypes;
