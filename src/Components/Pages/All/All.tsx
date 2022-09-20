import "./All.css"
import { Card } from "../../Card/Card"
import { useEffect, useState, useContext } from 'react';
import { Product } from '../../../interfaces/interfaces';
import { CartContext } from '../../../context/CartContext';
import { productsApi } from "../../../db/Products";




export const All = () => {

  const [data, setData] = useState<Product[]>([])

  const { addToCart, CartState } = useContext(CartContext)

  const { products } = CartState
  

  useEffect(() => {
    if (products?.length > 0) {
      localStorage.setItem("cart_local", JSON.stringify(CartState))
    }
  }, [addToCart])

  const getData = async () => {
    setData(productsApi)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="container_all">
      {data?.map(product => (
        <Card
          product={product}
          key={product.id}
          id={product.id}
          images={product.images}
          price={product.price}
          title={product.title}
        />
      ))}
      <div className="message">Micro-Front 1</div>
    </div>
  )
}

