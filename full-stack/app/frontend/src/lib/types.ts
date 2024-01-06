export type ProductData = {
  id: number | null;
  name: string;
  price: number;
  description: string;
};

export type InventoryData = {
  id: number;
  type: string;
  date: string;
  unit: number;
  quantity: number;
  price: number;
  inventory: number;
};

export type FormData = {
  id: number;
  quantity: number;
};
