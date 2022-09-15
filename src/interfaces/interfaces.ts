export interface Product {
  id: string;
  images: string;
  title: string;
  price: string
}


export interface CartState {
  productCount: number;
  products: Product[];
  total: number
}