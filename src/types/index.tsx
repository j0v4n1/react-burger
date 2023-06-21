import { IIngredient } from '../components/burger-ingredient/burger-ingredient.types';
import { IBurgerConstructorIngredient } from '../components/burger-constructor/burger-constructor.types';
import { AppDispatch } from '../services/store/store';

export type TToken = string | null;
export interface IOrderNumberState {
  orderNumber: number | null;
}

export type TBurgerConstructorState = {
  bun: null | IIngredient;
  ingredients: IBurgerConstructorIngredient[];
};

export interface IDragAndHoverIndex {
  dragIndex: number;
  hoverIndex: number;
}

export interface IIngredientDetailsState {
  currentIngredient: IIngredient;
  showModal: boolean;
}

export interface IBurgerIngredientsState {
  loading: boolean;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredients: IIngredient[];
}

export interface IIngredientsData {
  success: boolean;
  data: IIngredient[];
}

export interface IWebsocketFeedState {
  loading: boolean;
  websocketState: string;
  connectionStarted: boolean;
  wsConnected: boolean;
  messages: [];
  error: undefined;
}

export type TAuthData = (
  dispatch: AppDispatch,
  refreshToken: string,
  accessToken: string,
  name: string,
  email: string
) => void;
