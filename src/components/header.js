import React from "react"
import styled from "styled-components"

const Header = ({ title, subtitle, color }) => {
    return (
        <Container>
            <SubTitle color={color}>{subtitle}</SubTitle>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    color: ${props => props.color};
    margin-top: 0.75rem;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 28px;
    color: #4d4d4d;
`
