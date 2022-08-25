import React from 'react'

export default function item({ product }) {


    let imageStyle = {
        margin: '20px',
        width: 380,
        height: 'auto'

    }
    return (

        <>

            <br />
            <div className='col' style={imageStyle}>
                <div class='card card text-center' >
                    <img src={product.img} className="card-img-top"   alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Detalles</a>
                    </div>
                </div>
            </div>
        </>
    )
}
