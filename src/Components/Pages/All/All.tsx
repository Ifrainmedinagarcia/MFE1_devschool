import "./All.css"
import { adapterProducts } from '../../../clients/All/adapter';
import { Card } from "../../shared/Card"
import { getAllProducts } from '../../../clients/All/getAllProducts';
import { Products } from '../../interfaces/Product';
import { useEffect, useState } from 'react';

export const All = () => {

  const [data, setData] = useState<any[]>()

  const getData = async () => {
    const data = await getAllProducts("https://api.escuelajs.co/api/v1/products/?offset=0&limit=6")
    setData(adapterProducts(data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container_all">
      {data?.map(product => (
        <Card key={product.id} image={product.images} desc={product.description} price={product.price} title={product.title} />
      ))}

    </div>
  )
}

