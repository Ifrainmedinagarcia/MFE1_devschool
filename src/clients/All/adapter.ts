import { Product } from "../../interfaces/interfaces"




export const adapterProducts = (products: []) => {

  return products?.map(({ id, title, price, images }: Product) => {
    return {
      id,
      title,
      price,
      images: "https://img.freepik.com/vector-gratis/fondo-dibujado-colorido-espacio_52683-12645.jpg?w=2000&t=st=1663202193~exp=1663202793~hmac=4a81edb7688045b0518fac637ef93bebeb6d85d58d5e885b0c009e8f55460609"
    }
  })
}