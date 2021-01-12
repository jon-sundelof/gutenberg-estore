import React from 'react';
import Product from "./Product";

const CheckoutCart = () => {
    return (
        <div>
            {localStorage.getItem("products")}
        </div>
    )
}

export default CheckoutCart
