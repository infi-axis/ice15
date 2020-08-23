import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import Header from "../components/header"
import Candidate from "../components/candidate"

const SelectionPage = () => {
    const onClick = id => {
        localStorage.setItem("female", id)
        navigate("/submitting")
    }

    useLayoutEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        } else if (!localStorage.getItem("male")) {
            navigate("/male", { replace: true })
        }
    }, [])

    return (
        <Container>
            <Header title="Candidates" subtitle="Female" color="#E891F9" />
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
    top: -3%;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -6%;
    }
`

const CandidatesContainer = styled.div`
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.25rem;
`
