export type Item = {
  name: string;
  description: string;
  price: string;
  image?: string;
  options?: string;
};

export type Section = {
  id: string;
  title: string;
  items: Item[];
  description?: string;
};
