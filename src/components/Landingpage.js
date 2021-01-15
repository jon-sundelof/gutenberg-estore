import React from 'react';
import Header from "./Header";
import gutenbergTshirt from "../img/gutenbergTshirt.jpg";
import tinymceTshirt from "../img/tinymceTshirt.jpg";
import quireTshirt from "../img/quireTshirt.jpg";
import Product from "./Product"
import styled from "styled-components"
import firebase from "firebase"
import HeroSection from './HeroSection';
import Footer from "./Footer"




const Landingpage = ({ currentUser }) => {

    return (
        <>
            <main>
                <HeroSection />
                <Wrapper id="products">
                    <Product
                        name="gutenbergTshirt"
                        img={gutenbergTshirt}
                        alt="Gutenberg t-shirt for gutenberg lovers"
                        infoText="For gutenberg lovers"
                        price="249 Sek"
                        currentUserId={currentUser.uid}

                    />
                    <Product
                        name="tinymceTshirt"
                        img={tinymceTshirt}
                        alt={"Tinymce tshirt"}
                        infoText="We will never forget you"
                        price="419 Sek"
                        currentUserId={currentUser.uid}

                    />
                    <Product
                        name="quireTshirt"
                        img={quireTshirt}
                        alt="The best note app on a t-shirt"
                        infoText="The best note app"
                        price="1000 Sek"
                        currentUserId={currentUser.uid}

                    />
                </Wrapper>
            </main>
            <Footer />
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: #DE8066;
`

export default Landingpage;
