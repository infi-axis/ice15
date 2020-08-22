import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import Politician from "../components/politician"

const IndexPage = () => (
    <Layout>
        <Center>
            <Container>
                <Politician />
                <SubTitle>ICE15</SubTitle>
                <Title>Head Election</Title>
                <InputsContainer>
                    <Input />
                    <Input />
                    <Input />
                    <Dash />
                    <Input />
                    <Input />
                    <Input />
                </InputsContainer>
                <Next to="/selection/">Next</Next>
            </Container>
        </Center>
    </Layout>
)

export default IndexPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: auto;
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1%;
    color: #1c9fff;
    margin-top: 0.75rem;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: #3d3d3d;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2rem;

    & > *:not(:first-child) {
        margin-left: 0.5rem;
    }
`

const Input = styled.input.attrs({ type: "text" })`
    min-height: 48px;
    width: 36px;
    background: #f5f5f5;
    border-radius: 9px;

    border: none;
    outline: none;
    appearance: none;
`

const Dash = styled.div`
    width: 12px;
    height: 2px;
    background: #b1b1b1;
`

const Next = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.75rem;

    height: 48px;
    width: 100%;
    background: #2d74fe;

    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    color: white;

    border-radius: 14px;

    outline: none;
    border: none;
    appearance: none;
`
