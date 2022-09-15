import { Product } from "../../interfaces/interfaces";
import "./Card.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



interface Props {
  id: string;
  images: string;
  title: string;
  price: string;
  product: Product
}

export const Card = ({ images, title, price, product, id }: Props) => {

  const { addToCart } = useContext(CartContext)

  return (
    <div className="card__product">
      <img className="img__product" src={images} alt="" />
      <div className="container__content">
        <ul className="title__product">
          <li>{title}</li>
          <li>${price}</li>
        </ul>
        <button onClick={() => { addToCart(product) }} className="btn__add" type="button">Add to cart</button>
      </div>
    </div>
  )
}


