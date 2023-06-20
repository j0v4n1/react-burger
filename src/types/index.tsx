import { IIngredient } from '../components/burger-ingredient/burger-ingredient.types';
import { IBurgerConstructorIngredient } from '../components/burger-constructor/burger-constructor.types';

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
