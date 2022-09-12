import "./Card.css"

interface Props {
  image: string;
  title: string;
  price: string
}

export const Card = ({ image, title, price }: Props) => {
  return (
    <div className="card__product">
      <img className="img__product" src={image} alt="" />
      <div className="container__content">
        <ul className="title__product">
          <li>{title}</li>
          <li>${price}</li>
        </ul>
        <button className="btn__add">Add to car</button>
      </div>
    </div>
  )
}


