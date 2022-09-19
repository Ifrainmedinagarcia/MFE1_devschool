import "./CartPage.css"
import CartItem from '../CartItem/CartItem';
import { Product } from "../../../../interfaces/interfaces";
import { useContext, useEffect } from 'react';
import { CartContext } from '../../../../context/CartContext';


export const CartPage = () => {
  const { CartState, payProducts } = useContext(CartContext)
  const { products } = CartState

  useEffect(() => {
    localStorage.setItem("cart_local", JSON.stringify(CartState))
  }, [payProducts])

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
        onClick={payProducts}
        disabled={isDisabled()}
        className={isDisabled() ? "btn__disabled" : "button__cart"}>Pagar</button>
    </div>
  )
}


