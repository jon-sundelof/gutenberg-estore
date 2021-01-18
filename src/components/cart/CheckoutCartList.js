import React, { useState, useEffect } from 'react'
import CheckoutCart from "./CheckoutCart"
import firebase from "firebase"
import styled from 'styled-components'

const db = firebase.firestore()

// let docRef = db.collection("products");




const CheckoutCartList = ({ currentUser, img, alt, price }) => {

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

    return (
        <>
            <CartHeader>
                <Header>Checkout Cart</Header>
            </CartHeader>

            <CartContainer>{products.map(function (item, i) {
                return (<CheckoutCart price={price} alt={alt} img={img} key={i} item={item} />);
            })}

                <PaymentContainer>
                    <PaymentBox>
                        <PriceDataContainer>
                            <PriceContainer>
                                <CostOfItems>Cost of Items</CostOfItems>
                                <CostOfItems>{products ? products.reduce((a, b) => + a + b.Price, 0) : 'Loading'}</CostOfItems>
                            </PriceContainer>
                            <PriceContainer>
                                <TotalSum>Total Sum</TotalSum>
                                <TotalSum>{products ? products.reduce((a, b) => + a + b.Price, 0) : 'Loading'}</TotalSum>
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


const CartHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px auto;
    margin-bottom: 0;
    height: 100px;
    width: 700px;
    background: #fff;

    @media screen and (max-width: 700px){
        max-width: 400px;
    }
    @media screen and (max-width: 400px){
        width: 100vw;
    }

`
const Header = styled.h1`

`

const CartContainer = styled.div`
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
    @media screen and (max-width: 700px){
        max-width: 400px;
    }
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

    @media screen and (max-width: 700px){
        max-width: 250px;
        height: 50px
    }
`
const PriceDataContainer = styled.div`
    width: 500px;
    @media screen and (max-width: 700px){
        max-width: 300px;
    }
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