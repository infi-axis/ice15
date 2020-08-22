import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import Candidate from "../components/candidate"
import Button from "../components/button"

const SelectionPage = () => {
    return (
        <Layout>
            <Center>
                <Container>
                    <SubTitle>Your Code</SubTitle>
                    <Title>
                        DKU <Dash /> 4OP
                    </Title>
                    <CandidatesContainer>
                        <Candidate name="Poraor" subname="ปอ-ออ" />
                        <Candidate name="Looknam" subname="ลูกนํ้า" />
                        <Candidate name="Chaba" subname="ชบา" />
                    </CandidatesContainer>
                    <Button to="/farewell">Vote now!</Button>
                </Container>
            </Center>
        </Layout>
    )
}

export default SelectionPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: auto;
    width: 300px;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -3%;
    }
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    color: #1c9fff;
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

const Dash = styled.div`
    display: inline-block;
    width: 9px;
    height: 3px;
    background: #d1d1d1;
    vertical-align: center;
    margin: 0 0.25rem;
`

const CandidatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.25rem;

    & > *:not(:first-child) {
        margin-top: 0.675rem;
    }
`
