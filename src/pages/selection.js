import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"

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
                        <Candidate>
                            <Name>Guide</Name>
                            <SubName>ไกด์</SubName>
                        </Candidate>
                        <Candidate>
                            <Name>Boon</Name>
                            <SubName>บุ๋น</SubName>
                        </Candidate>
                        <Candidate>
                            <Name>Patton</Name>
                            <SubName>แพตตั้น</SubName>
                        </Candidate>
                        <Candidate>
                            <Name>Punn</Name>
                            <SubName>ปัน</SubName>
                        </Candidate>
                    </CandidatesContainer>
                    <Vote>Vote now!</Vote>
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

const Candidate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 3rem;
    width: 100%;

    padding: 0.75rem 1rem;
    border-radius: 14px;
    background: #f5f5f5;
`

const Name = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #3d3d3d;
`

const SubName = styled(Name)`
    color: #adadad;
    font-weight: 400;
`

const Vote = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.75rem;

    height: 48px;
    width: 100%;
    background: #2d74fe;

    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;

    border-radius: 14px;
    outline: none;
    border: none;
    appearance: none;
`
