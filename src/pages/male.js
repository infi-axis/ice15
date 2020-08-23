import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import Candidate from "../components/candidate"
import Button from "../components/button"
import { navigate } from "gatsby"

const SelectionPage = () => {
    const [selection, setSelection] = useState("")
    const [load, setLoad] = useState(false)
    const [code] = useState(localStorage.getItem("couponId"))

    const handleSelect = name => {
        setSelection(name)
    }

    const handleSubmit = event => {
        event.preventDefault()
        verifyInput()
    }

    const verifyInput = () => {
        if (!selection) {
            alert("Select a candidate")
        } else {
            localStorage.setItem("male", selection)
            navigate("/female")
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        } else {
            setLoad(true)
        }
    }, [])

    return load ? (
        <Layout>
            <Center>
                <Container>
                    <SubTitle>Your Code</SubTitle>
                    <Title>
                        {code.slice(0, 3)} <Dash /> {code.slice(3, 6)}
                    </Title>
                    <CandidatesContainer onSubmit={handleSubmit} id="male">
                        <Candidate
                            name="Guide"
                            subname="ไกด์"
                            onClick={handleSelect}
                        />
                        <Candidate
                            name="Boon"
                            subname="บุ๋น"
                            onClick={handleSelect}
                        />
                        <Candidate
                            name="Patton"
                            subname="แพตตั้น"
                            onClick={handleSelect}
                        />
                        <Candidate
                            name="Punn"
                            subname="ปัน"
                            onClick={handleSelect}
                        />
                    </CandidatesContainer>
                    <Button type="submit" form="male">
                        Vote now!
                    </Button>
                </Container>
            </Center>
        </Layout>
    ) : null
}

export default SelectionPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: auto;
    width: 340px;

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

const CandidatesContainer = styled.form`
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
`
