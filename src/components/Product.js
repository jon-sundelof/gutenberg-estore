import React, { useState, useEffect } from 'react';
import firebase from "firebase";

const db = firebase.firestore()

let array = [];


const Product = ({ img, alt, infoText, price, name }) => {
    const [product, setProduct] = useState({})

    const tshirt = {
        name: name,
        price: price
    }

    useEffect(() => {

        db.collection("products").doc(name).set({
            img: img,
            name: name,
            price: 1,
        }).then(() => console.log("send")).catch((err) => console.log(err))
    }, [product])


    const onButtonClick = (e) => {
        setProduct(tshirt)
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