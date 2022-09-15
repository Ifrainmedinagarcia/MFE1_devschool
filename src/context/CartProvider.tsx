import { CartContext } from "./CartContext"
import { CartState, Product } from '../interfaces/interfaces';
import { useReducer } from "react";
import { CartReducer } from "./cartReducer";


const INITIAL_STATE: CartState = {
  productCount: 0,
  products: [],
  total: 0
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const CartProvider = ({ children }: Props): JSX.Element => {

  const [CartState, dispatch] = useReducer(CartReducer, INITIAL_STATE)

  const addToCart = (product: Product) => {
    dispatch({ type: "addProduct", payload: product })
  }

  const deleteProduct = (id: string) => {
    dispatch({ type: "deleteProduct", id })
  }

  return (
    <CartContext.Provider value={{ CartState, addToCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}


