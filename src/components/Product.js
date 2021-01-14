import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import styled from "styled-components"

const db = firebase.firestore();
const au = firebase.auth();
// let currentUid = firebase.auth().currentUser.uid;

let array = [];


const Product = ({ img, alt, infoText, price, name, currentUserId }) => {

    const tshirt = {
        img: img,
        name: name,
        price: price
    }

    const usersRef = db.collection("users").doc(currentUserId);


    const onButtonClick = (e) => {
        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    usersRef.onSnapshot((doc) => {
                        db.collection("users").doc(currentUserId).collection("cart").doc().set({
                            Tshirt: name,
                            Price: price
                        })
                    })
                } else {
                    usersRef.onSnapshot((doc) => {
                        db.collection("users").doc(currentUserId).set({
                            Name: "Name",
                            Role: "Peasant"
                        })
                    })
                }
            })
    }

    return (
        <Wrapper>
            <InfoText>{infoText}</InfoText>
            <ImageContainer>
                <Image src={img} alt={alt} />
            </ImageContainer>
            <Price>{price}</Price>
            <Button onClick={onButtonClick}>BUY <i className="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }}></i></Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 250px;
    align-items: center;
`

const InfoText = styled.p`
    font-size: 1.3rem;
    margin-bottom: 0 auto;
    text-decoration: underline;
    align-self: center;
`

const ImageContainer = styled.div`
    width: 250px;
    height: 250px;
`

const Image = styled.img`
    border: 2px solid rgb(59, 72, 169);
    border-radius: 20px;
    width: 250px;
    height: 250px;
`

const Price = styled.p`
    margin: 0 auto;
    font-family: 'Merriweather', serif;
`

const Button = styled.button`
    width: 100px;
    border: 2px solid rgb(59, 72, 169);
    border-radius: 20px;
    background: none;
    padding: 5px;
    outline: none;
`

export default Product;