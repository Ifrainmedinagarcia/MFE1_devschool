import { CartState, Product } from "../interfaces/interfaces";


type CartAction =
  | { type: "addProduct", payload: Product }
  | { type: "deleteProduct", id: string }

export const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        productCount: state.productCount + 1,
        products: [...state.products, action.payload],
        total: state.total + Number(action.payload.price)
      }
    case "deleteProduct":
      return {
        ...state,
        productCount: state.productCount - 1,
        products: state.products.filter(({ ...product }) => product.id !== action.id),
        //total: state.total - Number(action.payload.price)
      }
    default:
      return state
  }
}