import { useContext } from "react"
import { CartContext } from '../../../../context/CartContext';





export const CartPage = () => {
  const { CartState } = useContext(CartContext)

  const { products } = CartState


  console.log(products);

  return (
    <div>

    </div>
  )
}


