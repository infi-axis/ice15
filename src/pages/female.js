import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { navigate } from "gatsby"

import Candidate from "../components/candidate"

const url = "https://us-central1-ice15-e33ad.cloudfunctions.net/vote"
const options = { headers: { "Content-Type": "application/json" } }

const SelectionPage = () => {
    const [code, setCode] = useState("")

    const onClick = id => {
        localStorage.setItem("female", id)
        submitVote()
    }

    const submitVote = async () => {
        try {
            const body = {
                couponId: localStorage.getItem("couponId"),
                male: localStorage.getItem("male"),
                female: localStorage.getItem("female"),
            }

            const res = await axios.post(url, body, options)
            if (res.status === 200) {
                navigate("/farewell")
            }
        } catch (e) {
            console.log(e)
        }
    }

    useLayoutEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        } else if (!localStorage.getItem("male")) {
            navigate("/male", { replace: true })
        } else {
            setCode(localStorage.getItem("couponId"))
        }
    }, [])

    return (
        <Container>
            <SubTitle>Your Code</SubTitle>
            <Title>
                {code.slice(0, 3)} <Dash /> {code.slice(3, 6)}
            </Title>
            <CandidatesContainer>
                <Candidate
                    name="Poraor"
                    subname="ปอ-ออ"
                    onClick={() => onClick(1)}
                />
                <Candidate
                    name="Looknam"
                    subname="ลูกนํ้า"
                    onClick={() => onClick(2)}
                />
                <Candidate
                    name="Chaba"
                    subname="ชบา"
                    onClick={() => onClick(3)}
                />
            </CandidatesContainer>
        </Container>
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
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.25rem;
`
