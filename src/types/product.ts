export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  olfactoryFamily?: string;
  gender?: 'Feminino' | 'Masculino' | 'Unissex' | 'Compartilhável';
};
