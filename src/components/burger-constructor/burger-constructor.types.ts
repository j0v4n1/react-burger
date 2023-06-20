import { IIngredient } from '../burger-ingredient/burger-ingredient.types';

export interface IBurgerConstructorIngredient extends IIngredient {
  uniqueId: string;
}
