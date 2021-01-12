import React, { useState } from 'react';
import firebase from "firebase";

// const db = firebase.firestore()
// db.collection("products").doc("test").set({
//     name: name,
//     price: 1,
// }).then(() => console.log("send")).catch((err) => console.log(err))
let array = [];

const Product = ({ img, alt, infoText, price, name }) => {



    const tshirt = {
        name: name,
        price: price,
    }


    const [product, setProduct] = useState()

    const onButtonClick = () => {
        array.push(tshirt)
        setProduct(tshirt)
        localStorage.setItem("products", JSON.stringify(array))
    }

    return (
        <div className="product-container">
            <p className="info-text">{infoText}</p>
            <div className="img-container">
                <img src={img} alt={alt} />
            </div>
            <p>{price}</p>
            <button onClick={onButtonClick}>BUY <i className="fas fa-shopping-cart"></i></button>
        </div>
    )
}

export default Product;