import { IIngredient } from '../components/burger-ingredient/burger-ingredient.types';
import { IBurgerConstructorIngredient } from '../components/burger-constructor/burger-constructor.types';
import { AppDispatch } from '../services/store/store';

export type Token = string | null;
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

export type TAuthData = (
  dispatch: AppDispatch,
  refreshToken: string,
  accessToken: string,
  name: string,
  email: string
) => void;

export interface IOrder {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}
