import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <Title>Gutenberg E-Shirts</Title>
                <IconWrapper>
                    <a href="https://github.com/jon-sundelof/gutenberg-estore" target="_blank"
                        rel="noreferrer"><Icon className="fab fa-github"></Icon></a>
                    <Icon className="fab fa-instagram"></Icon>
                    <Icon className="fab fa-facebook-f"></Icon>
                </IconWrapper>
            </Wrapper>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    height: 15vh;
    background-color: #0f0f0f;
`

const Wrapper = styled.div`
    width: 57%;
    height: inherit;
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: grey;
    opacity: 70%;
    margin: 0 15px;
    font-size: 2.7rem;
`

const IconWrapper = styled.div`
    justify-self: center;
    /* border: 1px solid white; */
    width: 250px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Icon = styled.i`
    font-size: 3rem;
    color: grey;

    &:hover{
        cursor: pointer;
        color: lightgray;
        font-size: 3.1rem;
    }
`



export default Footer
