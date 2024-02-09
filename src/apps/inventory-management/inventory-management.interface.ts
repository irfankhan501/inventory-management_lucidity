export interface IProduct {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
}

export enum View {
  Admin,
  User,
}

export enum Action {
  Edit,
  Delete,
  View,
}
