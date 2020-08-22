import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import ThankYou from "../components/thankyou"

const FarewellPage = () => {
    return (
        <Layout>
            <Center>
                <Container>
                    <ThankYou />
                    <Title>Thank You!</Title>
                    <Paragraph>
                        Your vote have been submitted. The result will come out
                        in a few days.
                    </Paragraph>
                </Container>
            </Center>
        </Layout>
    )
}

export default FarewellPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: 300px;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -3%;
    }
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: #ffb401;

    margin-top: 1.5rem;
`

const Paragraph = styled.p`
    margin-top: 1rem;
    font-weight: 500;
    font-size: 16px;
    color: #838383;
    text-align: center;
`
