import React from 'react';
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import Cancel from '../../img/cancel.png'


const CheckoutCart = ({ item, img, alt }) => {

    return (
        <>
            <CartContainer>
                <ItemContainer>
                    <Img src={item.Img} />
                    <ContentContainer>
                        <UpperRow>
                            <TextContainer>
                                <Title>
                                    {item.Tshirt}
                                </Title>
                                <Description>
                                    {item.alt}
                                </Description>
                            </TextContainer>
                            {/*  <Icon> */}
                            <CloseIcon src={Cancel} />
                            {/* </Icon> */}
                        </UpperRow>

                        <PriceAndRemoveCon>
                            <Selector>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Selector>
                            <Price>
                                {item.Price}
                            </Price>
                        </PriceAndRemoveCon>
                    </ContentContainer>
                </ItemContainer>
            </CartContainer>
        </>
    )
}
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
   /*  height: 350px; */
`

const UpperRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    margin-bottom: 45px;
`

const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100vw;
   /*  padding: 15px 15px; */
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
 /*    flex-direction: column; */
    align-items: center;
    background: #fff;
 /*    border-bottom: solid 1px grey;
    border-width: 50%; */
    width: 700px;
    height: 250px;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    /* padding: 40px; */
`;

const PriceAndRemoveCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

/* const Icon = styled.div`
    background: transparent;
    font-size: 2rem;
    padding-right: 20px;    
    cursor: pointer;
    outline: none;
`; */

const CloseIcon = styled.img`
    width: 5%;
    height: 5%;
    color: #0f0f0f;
    margin-right: 15px;

    :hover {
        cursor: pointer;
    }

`;
/* const CloseIcon = styled(FaTimes)`
    color: #0f0f0f;
`; */

const Price = styled.p`
    font-size: 1.2rem;
    margin-right: 30px;
    margin-bottom: 0px;
`;
const Description = styled.p`
    font-size: 1rem;
    justify-self: flex-start;
    align-self: flex-start;
`;

const Title = styled.h1`
    align-self: flex-start;
    font-size: 1.2rem;
    color: #DE8066;
`;
const Img = styled.img`
    height: 15vh;
    margin: 8px;
    border-radius: 15px;
    border: solid 1px grey;
`;

const Selector = styled.select`
    align-self: flex-start;
    width: 60px;
    height: 35px;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
`;
const Option = styled.option`
    text-align: center;
`;

export default CheckoutCart
