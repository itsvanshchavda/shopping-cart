

import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product';
import "./shop.css";
import Navbar from '../../components/Navbar';


const Shop = () => {
  return (
    <div className="shop">
      <div className='shopTitle'>
        <h1>Shopping.co</h1>
      </div>

      <div className="products"> {

        PRODUCTS.map(products => {
          return <Product data={products} />

        })

      }

      </div>
    </div>
  )
}

export default Shop