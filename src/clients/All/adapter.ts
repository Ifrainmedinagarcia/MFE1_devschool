import { Product } from '../../Components/interfaces/Product';




export const adapterProducts = (products: any) => {  
  
  return products.map(({ id, title, price, images }: Product) => {
    return {
      id,
      title,
      price,
      images: images[0]
    }
  })
}