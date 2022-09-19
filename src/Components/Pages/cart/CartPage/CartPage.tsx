import "./CartPage.css"
import CartItem from '../CartItem/CartItem';
import { Product } from "../../../../interfaces/interfaces";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';


export const CartPage = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const { CartState, payProducts } = useContext(CartContext)
  const { products } = CartState

  useEffect(() => {
    localStorage.setItem("cart_local", JSON.stringify(CartState))
  }, [payProducts])

  const pay = () => {
    payProducts()
    setSuccessMessage(true)
  }

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
        onClick={pay}
        disabled={isDisabled()}
        className={isDisabled() ? "btn__disabled" : "button__cart"}>
        Pagar
      </button>

      {successMessage && <h1 className="success__message">Pagaste con éxito tus productos</h1>}

    </div>
  )
}


