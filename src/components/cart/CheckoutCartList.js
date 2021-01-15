import React, { useState, useEffect } from 'react'
import CheckoutCart from "./CheckoutCart"
import firebase from "firebase"
import styled from 'styled-components'

const db = firebase.firestore()

// let docRef = db.collection("products");




const CheckoutCartList = ({ currentUser, img, alt }) => {

    const [products, setProducts] = useState([])
    let currentUserUid = currentUser.uid;

    useEffect(() => {
        let array = []
        const getProducts = async () => {
            await db.collection("users").doc(currentUserUid).collection("cart").get().then(function (item) {
                item.forEach(function (doc) {
                    array.push(doc.data())
                });
            });
            setProducts(array)
        }
        getProducts()

    }, [currentUserUid])

    return (<><CartContainer>{products.map(function (item, i) {
        return (<CheckoutCart alt={alt} img={img} key={i} item={item} />);
    })}
        <PaymentContainer>
            <PaymentBox>

                <PlaceOrderBtn>
                    Place Order
                </PlaceOrderBtn>
            </PaymentBox>
        </PaymentContainer>
    </CartContainer>
    </>
    );
}


export default CheckoutCartList

const CartContainer = styled.div`
    margin-top: 35px;
`

const PaymentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 150px;
   /*  width: 100vw; */
`
const PaymentBox = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;
    width: 700px;
    background: #fff;
`
const PlaceOrderBtn = styled.button`
    width: 500px;
    height: 80px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background: #DE8066;

    &:focus{
        outline: none;
    }
`