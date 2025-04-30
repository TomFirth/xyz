export type MenuData = {
  [category: string]: {
    id: number;
    dishes: {
      name: string;
      price: string;
      description: string;
    }[];
  };
};

export type Dish = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export type Category = {
  id: number;
  dishes: Dish[];
};

export type Menu = Record<string, Category>;