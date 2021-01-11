import React from 'react'

const Product = ({ img, alt, infoText, price }) => {
    return (

        <div className="product-container">
            <p className="info-text">{infoText}</p>
            <div className="img-container">
                <img src={img} alt={alt} />
            </div>

            <p>{price}</p>
            <button>BUY <i className="fas fa-shopping-cart"></i></button>
        </div>
    )
}

export default Product
