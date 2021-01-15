import React, { useState } from 'react';
import firebase from "firebase";
import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import ImageContentHover from "react-image-hover";
import ReactImageMagnify from 'react-image-magnify';


const db = firebase.firestore();

let array = [];

const Product = ({ img, alt, infoText, price, name, currentUserId }) => {

    const tshirt = {
        img: img,
        name: name,
        price: price
    }
    let history = useHistory()


    const usersRef = db.collection("users").doc(currentUserId);

    const imageProps = {
        smallImage: {
            alt: alt,
            isFluidWidth: true,
            src: img,

        },
        largeImage: {
            src: img,
            width: 500,
            height: 500
        },
        enlargedImageContainerStyle: { background: '#fffff', zIndex: 9 }
    }


    const onButtonClick = (e) => {

        if (!currentUserId) {

            history.push("/login")
            return;
        }

        const date = Date.now()


        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    usersRef.onSnapshot((doc) => {
                        db.collection("users").doc(currentUserId).collection("cart").doc().set({
                            Img: img,
                            Tshirt: name,
                            Price: price,
                            id: date,
                            alt: alt
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
            <ImageContainer>
                <ReactImageMagnify {...imageProps} />
            </ImageContainer>
            <Title>{infoText}</Title>
            <Price>{price}<Button onClick={onButtonClick}>BUY <i className="fas fa-shopping-cart" style={{ fontSize: "1rem" }}></i></Button></Price>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 250px;
    align-items: center;
`

const Title = styled.p`
    font-size: 1.3rem;
    margin-top: 10px;
    align-self: flex-start;
    color: #000000;
    font-family: 'Merriweather', serif;
`

const ImageContainer = styled.div`
    width: 340px;
    height: 370px;
`

const Image = styled.img`
    border: 2px solid black;
    border-radius: 10px;
    width: 340px;
    height: 360px;

    /* &:hover{
        transition: all 2s;
        transform: scale(1.50);
    } */
`

const Price = styled.p`
    font-family: 'Merriweather', serif;
    font-size: 1.3rem;
    color: #000000;
    align-self: flex-start;
    margin: 0%;
`

const Button = styled.button`
    width: 80px;
    border: 2px solid #000000;
    border-radius: 20px;
    background: none;
    padding: 3px;
    color: #000000;
    font-size: 1rem;
    margin-left: 20px;

    &:hover{
        color: #000000;
        border: 2px solid #000000;
    }

    &:focus{
        outline: none;
    }
`

export default Product;