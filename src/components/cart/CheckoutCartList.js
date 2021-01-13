import React, { useState, useEffect } from 'react'
import CheckoutCart from "./CheckoutCart"
import firebase from "firebase"

const db = firebase.firestore()

let docRef = db.collection("products");

let array = []


const CheckoutCartList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const lol = async () => {
            await db.collection("products").get().then(function (item) {
                item.forEach(function (doc) {

                    array.push(doc.data())

                    console.log(array)
                });
            });
            setProducts(array)
        }
        lol()

    }, [])
    console.log(products)
    return (<div>{products.map(function (item, i) {
        return (<CheckoutCart key={i} item={item} />);
    })}</div>);


}


export default CheckoutCartList
