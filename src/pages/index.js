import React from "react"
import styled from "styled-components"
import useDigitInput from "react-digit-input"

import Layout from "../components/layout"
import Center from "../components/center"
import Politician from "../components/politician"
import Button from "../components/button"
import { navigate } from "gatsby"

const IndexPage = () => {
    const [value, onChange] = React.useState("")
    const digits = useDigitInput({
        acceptedCharacters: /^\w+$/,
        length: 6,
        value,
        onChange,
    })

    const verifyInput = () => {
        navigate("/male")
        console.log(value)
        fetch("https://us-central1-ice15-e33ad.cloudfunctions.net/verifyCode", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ couponId: value }), // body data type must match "Content-Type" header
        })
            .then(data => {
                console.log("Success:", data)
            })
            .catch(error => {
                console.error("Error:", error)
            })
    }

    const handleSubmit = event => {
        event.preventDefault()
        verifyInput()
    }

    return (
        <Layout>
            <Center>
                <Container>
                    <Politician />
                    <SubTitle>ICE15</SubTitle>
                    <Title>Head Election</Title>
                    <InputsContainer onSubmit={handleSubmit} id="code">
                        <Input inputMode="decimal" {...digits[0]} />
                        <Input inputMode="decimal" {...digits[1]} />
                        <Input inputMode="decimal" {...digits[2]} />
                        <Dash />
                        <Input inputMode="decimal" {...digits[3]} />
                        <Input inputMode="decimal" {...digits[4]} />
                        <Input inputMode="decimal" {...digits[5]} />
                    </InputsContainer>
                    <Button type="submit" form="code">
                        Next
                    </Button>
                </Container>
            </Center>
        </Layout>
    )
}

export default IndexPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: auto;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -3%;
    }
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

const InputsContainer = styled.form`
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

    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;

    color: #3d3d3d;

    border: none;
    outline: none;
    appearance: none;
`

const Dash = styled.div`
    width: 12px;
    height: 2px;
    background: #b1b1b1;
`
