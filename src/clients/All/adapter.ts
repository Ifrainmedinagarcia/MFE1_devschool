import { Product } from "../../interfaces/interfaces"




export const adapterProducts = (products: []) => {

  return products?.map(({ id, title, price, images }: Product) => {
    return {
      id,
      title,
      price,
      images: images[0]
    }
  })
}