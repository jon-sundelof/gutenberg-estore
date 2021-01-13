import React, { useState, useEffect } from 'react';
import firebase from "firebase"


// db.collection("cities").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });

// docRef.get().then(function (doc) {
//     if (doc.exists) {
//         let product = doc.data()
//         console.log(product)
//     } else {
//         console.log("No such document")
//     }
// }).catch(err => console.log(err))

const CheckoutCart = ({ item }) => {

    return (
        <div key={item.id}><p>{item.name}</p></div>
    )
}

export default CheckoutCart
