import React from 'react';
import Header from "./Header";
import gutenbergTshirt from "../img/gutenbergTshirt.jpg";
import tinymceTshirt from "../img/tinymceTshirt.jpg";
import quireTshirt from "../img/quireTshirt.jpg";
import Product from "./Product"
import styled from "styled-components"
import firebase from "firebase"
import HeroSection from './HeroSection';




const Landingpage = ({ currentUser }) => {

    return (
        <>
            <main>
                <HeroSection />
                <Wrapper>
                    <Product
                        name="gutenbergTshirt"
                        img={gutenbergTshirt}
                        alt="Gutenberg t-shirt for gutenberg lovers"
                        infoText="For gutenberg lovers"
                        price="Price: 100 000 SEK"
                        currentUserId={currentUser.uid}

                    />
                    <Product
                        name="tinymceTshirt"
                        img={tinymceTshirt}
                        alt={"Tinymce tshirt"}
                        infoText="We will never forget you"
                        price="Price: 100 000 SEK"
                        currentUserId={currentUser.uid}

                    />
                    <Product
                        name="quireTshirt"
                        img={quireTshirt}
                        alt="The best note app on a t-shirt"
                        infoText="The best note app"
                        price="Price: 100 000 SEK"
                        currentUserId={currentUser.uid}

                    />
                </Wrapper>
            </main>
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export default Landingpage;
