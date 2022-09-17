import { useContext } from "react"
import { CartContext } from '../../../../context/CartContext';
import "./CartPage.css"
import CartItem from '../CartItem/CartItem';
import { Product } from "../../../../interfaces/interfaces";




export const CartPage = () => {
  const { CartState } = useContext(CartContext)

  const { products } = CartState

  const isDisabled = () => products?.length === 0


  return (
    <div className="container__cart">
      {
        products?.map((product: Product) => {
          return (
            <CartItem key={product.id} product={product} />
          )
        })
      }
      <span className="total__cart">{`Total: $ ${CartState?.total}`}</span>
      <button
        onClick={() => { }}
        disabled={isDisabled()}
        className={isDisabled() ? "btn__disabled" : "button__cart"}>Pagar</button>
    </div>
  )
}


