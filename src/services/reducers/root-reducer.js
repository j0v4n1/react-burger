import { combineReducers } from 'redux';
import burgerConstructor from '../slices/burger-constructor';
import burgerIngredients from '../slices/burger-ingredients';
import orderDetails from '../slices/order-details';
import ingredientDetails from '../slices/ingredient-details';
import profile from '../slices/profile';
import websocketFeed from '../slices/websocketFeed';
import orderInformation from '../slices/order-information';
const rootReducer = combineReducers({
  burgerIngredients,
  burgerConstructor,
  ingredientDetails,
  orderDetails,
  profile,
  websocketFeed,
  orderInformation,
});

export default rootReducer;
