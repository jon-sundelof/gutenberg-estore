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
                <PriceDataContainer>
                    <PriceContainer>
                        <CostOfItems>Cost of Items</CostOfItems>
                        <CostOfItems>1246,00</CostOfItems>
                    </PriceContainer>
                    <PriceContainer>
                        <TotalSum>Total Sum</TotalSum>
                        <TotalSum>1246,00</TotalSum>
                    </PriceContainer>
                </PriceDataContainer>
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
    margin-top: 15px;
    margin-bottom: 150px;
   /*  width: 100vw; */
`
const PaymentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const PriceDataContainer = styled.div`
    width: 500px;
`

const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const CostOfItems = styled.p`
    font-size: 1rem;
`
const TotalSum = styled.p`
    font-size: 1.2rem;
    font-style: bold;

`