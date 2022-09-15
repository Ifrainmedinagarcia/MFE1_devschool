import { createContext } from "react";
import { CartState, Product } from '../interfaces/interfaces';



export type CartContextProps = {
  CartState: CartState,
  addToCart: (product: Product) => void,
  deleteProduct: (id: string) => void
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);