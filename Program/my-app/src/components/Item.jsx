import React from 'react'

export default function item({ product }) {
    return (

        <>
            <div className='p-2 border'>
                <p > ID: {product.id}</p>
                <p> Name :{product.name}</p>
                <p> Price :{product.price}</p>
                <p> Stock :{product.stock}</p>
                <img style={{ height: '200px'}} src={product.img} alt='product.name'/>
            </div>
            <br/>
        </>
    )
}
