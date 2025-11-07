export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'headphones' | 'speakers' | 'earphones';
  price: number;
  image: string;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery?: string[];

  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    zipCode: string;
    city: string;
    country: string;
  };
  paymentMethod: 'e-money' | 'cash';
  createdAt: string;
}
