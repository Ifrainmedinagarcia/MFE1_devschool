import "./CartIcon.css"
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";



export const CartIcon = () => {
  const { CartState } = useContext(CartContext)

  const { productCount } = CartState


  return (
    <>
      <NavLink to={"cart"} data-testid={"cart__btn"}>
        <img className="cart" src="https://cdn3.iconfinder.com/data/icons/delivery-59/100/location-512.png" alt="" />
      </NavLink>
      {productCount !== 0 && <div className="cart_ammount">{productCount}</div>}
    </>
  )
}

