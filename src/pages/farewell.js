import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import ThankYou from "../components/thankyou"

const FarewellPage = () => {
    return (
        <Container>
            <ThankYou />
            <Title>Thank You!</Title>
            <Paragraph>
                Your vote has been submitted. We will announce the result
                tonight.
            </Paragraph>
            <AttributionTitle>Authors of This Website</AttributionTitle>
            <AttributionsContainer>
                <Attribution href="https://instagram.com/winnaries/">
                    @winnaries
                </Attribution>
                <Attribution href="https://instagram.com/wasu.s_/">
                    @wasurocks
                </Attribution>
                <Attribution href="https://instagram.com/boss_wt">
                    @bosswt
                </Attribution>
            </AttributionsContainer>
            <AttributionTitle>Special Thanks</AttributionTitle>
            <AttributionsContainer>
                <Attribution href="https://www.instagram.com/staanpat">
                    @staanpat
                </Attribution>
            </AttributionsContainer>
        </Container>
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

const Attribution = styled(motion.a).attrs({
    whileHover: {
        y: -4,
    },
    whileTap: {
        y: -2,
    },
})`
    display: inline-block;
    font-weight: 600;
    color: #1c9fff;

    text-decoration: none;
    border: none;
    outline: none;
    appearance: none;

    &:not(:first-child) {
        margin-left: 0.5rem;
    }
`

const AttributionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: hsl(0, 0%, 85%);
    margin-top: 2rem;
`

const AttributionsContainer = styled(motion.div)`
    margin-top: 0.375rem;
`
