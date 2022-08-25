import React from 'react'
import Item from './Item'

export default function ItemList({ products }) {
 
  return (
    <div className='row row-cols-1 row-cols-md-5' > 
        {products.map((product) => ( 
    <Item key={product.id} product={product}/>) ) }
    </div>
  )
}

