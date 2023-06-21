import { IBurgerConstructorIngredient } from '../burger-constructor/burger-constructor.types';

export interface IBurgerConstructorComponent {
  ingredient: IBurgerConstructorIngredient;
  index: number;
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}
