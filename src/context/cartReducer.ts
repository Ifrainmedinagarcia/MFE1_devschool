import { CartState, Product } from '../interfaces/interfaces';


type CartAction =
  | { type: "addProduct", payload: Product }
  | { type: "deleteProduct", payload: Product }
  | { type: "payProducts", payload: CartState }
  | { type: "setStateWithServer" }


export const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        productCount: state.productCount + 1,
        products: [...state.products, action.payload],
        total: Number(state.total) + Number(action.payload.price)
      }

    case "deleteProduct":
      return {
        ...state,
        productCount: state.productCount - 1,
        products: [...state.products.filter(product => product?.id !== action.payload?.id)],
        total: Number(state.total) - Number(action.payload.price)
      }
    case "payProducts":
      return {
        ...state,
        productCount: action.payload.productCount,
        products: [...action.payload.products],
        total: Number(action.payload.total)
      }
    default:
      return state
  }
}