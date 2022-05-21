import React from 'react'
import ProductItem from '../components/ProductItem'
import useFetch from '../hooks/useFetch'
import '../styles/ProductList.scss'

const ProductList = () => {

  const API = 'https://api.escuelajs.co/api/v1/products'
  const products = useFetch(API)

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList