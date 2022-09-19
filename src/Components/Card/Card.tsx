import "./Card.css"
import { CartContext } from '../../context/CartContext';
import { Product } from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from 'react';


interface Props {
  id: string;
  images: string;
  title: string;
  price: string;
  product: Product
}

export const Card = ({ images, title, price, product, id }: Props) => {

  const { addToCart, CartState } = useContext(CartContext)

  const [Exists, setExists] = useState<boolean>(false)

  const { products } = CartState

  useEffect(() => {
    const productExits = products.findIndex(p => p.id === product.id);
    if (productExits >= 0) setExists(true);
  }, [])

  const addCart = () => !Exists && addToCart?.(product)

  return (
    <div className="card__product">
      <img className="img__product" src={images} alt="" />
      <div className="container__content">
        <ul className="title__product">
          <li>{title}</li>
          <li>${price}</li>
        </ul>
        <button onClick={addCart} className="btn__add" type="button">Add to cart</button>
      </div>
    </div>
  )
}


