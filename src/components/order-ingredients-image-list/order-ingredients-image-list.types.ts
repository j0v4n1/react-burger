import OrderIngredientsImageList from './order-ingredients-image-list';

export interface IOrderIngredientsImageListComponent {
  order: {
    _id: string;
    name: string;
    createdAt: string;
    number: number;
    ingredients: string[];
  };
}
