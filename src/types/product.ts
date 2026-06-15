export type ProductPromotion = {
  enabled?: boolean;
  discountPercentage?: number;
  label?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number; // Current price shown to customers
  originalPrice?: number; // Original regular price before promotion
  image: string;
  images?: string[];
  description?: string;
  olfactoryFamily?: string;
  gender?: 'Feminino' | 'Masculino' | 'Unissex' | 'Compartilhável';
  promotion?: ProductPromotion;
};
