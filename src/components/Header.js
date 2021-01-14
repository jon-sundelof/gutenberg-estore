import React from 'react'
import styled from "styled-components"

const Header = ({ number }) => {
    return (
        <Wrapper className="headerMain">
            <Title>Gutenbergs e-store!</Title>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    margin: 0%;
    height: 150px;
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: rgb(59, 72, 169);
    margin: 0%;
    font-size: 4rem;
    font-family: 'Work Sans', sans-serif
`

export default Header;