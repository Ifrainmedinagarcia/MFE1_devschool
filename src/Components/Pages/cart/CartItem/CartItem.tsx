import { Product } from "../../../../interfaces/interfaces"
import "./CartItem.css"
import { useContext } from 'react';
import { CartContext } from "../../../../context/CartContext";

interface Props {
  product: Product
}

const CartItem = ({ product }: Props): JSX.Element => {

  const { deleteProduct } = useContext(CartContext)
   
  return (
    <>
      <div className="container__item">
        <img className="image__cart" src={product?.images} alt="" />
        <span className="name__cart">{`${product?.title}:`}</span>
        <span className="name__cart">{`$${product?.price}`}</span>
        <div className="delete__button">
          <button onClick={()=> deleteProduct(product)} className="btn__delete">delete</button>
        </div>
      </div>
      <hr />
    </>


  )
}

export default CartItem
