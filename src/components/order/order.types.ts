export interface IOrderComponent {
  order: {
    _id: string;
    name: string;
    createdAt: string;
    number: number;
    ingredients: string[];
  };
  path: string;
}
