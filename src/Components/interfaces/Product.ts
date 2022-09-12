export interface Product {
  id: string;
  images: string;
  title: string;
  price: string
}

export interface Products {
  products: Product[]
}