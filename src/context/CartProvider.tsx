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
  const cartLocal = localStorage.getItem("cart_local")
  const localState = cartLocal && JSON.parse(cartLocal)

  const [CartState, dispatch] = useReducer(CartReducer, localState || INITIAL_STATE)

  const { products } = CartState

  const addToCart = (product: Product) => {
  
    if (products.includes(product)) return

    dispatch({ type: "addProduct", payload: product })
  }

  const deleteProduct = (product: Product) => {
    dispatch({ type: "deleteProduct", payload: product })
  }

  const payProducts = () => {
    dispatch({ type: "payProducts", payload: INITIAL_STATE })
  }

  return (
    <CartContext.Provider value={{ CartState, addToCart, deleteProduct, payProducts }}>
      {children}
    </CartContext.Provider>
  )
}


