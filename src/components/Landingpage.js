import React from 'react';
import Header from "./Header";
import gutenbergTshirt from "../img/gutenbergTshirt.jpg";
import tinymceTshirt from "../img/tinymceTshirt.jpg";
import quireTshirt from "../img/quireTshirt.jpg";
import Product from "./Product"


function Landingpage() {
    return (
        <>
            <Header />
            <hr />
            <main>
                <div className="products">
                    <Product
                        img={gutenbergTshirt}
                        alt={"Gutenberg t-shirt for gutenberg lovers"}
                        infoText={"For gutenberg lovers"}
                        price="Price: 100 000 SEK" />
                    <Product
                        img={tinymceTshirt}
                        alt={"Tinymce tshirt"}
                        infoText={"We will never forget you"}
                        price="Price: 100 000 SEK" />
                    <Product
                        img={quireTshirt}
                        alt={"The best note app on a t-shirt"}
                        infoText={"The best note app on a t-shirt"}
                        price="Price: 100 000 SEK" />
                </div>
            </main>
        </>
    )
}

export default Landingpage;
