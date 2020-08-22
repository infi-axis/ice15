import React, { useRef, useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import Politician from "../components/politician"
import Button from "../components/button"

const CODE_LENGTH = new Array(6).fill("")

const IndexPage = () => {
    const [codes, setCodes] = useState(CODE_LENGTH)
    const focus = useRef(0)
    const codesRef = useRef()
    const focusedInput = useRef(null)

    const handleChange = event => {
        const codeIndex = parseInt(event.target.name.slice(4, 5), 10)
        const codeValue = event.target.value
        const codesClone = [...codes]
        codesClone[codeIndex] = codeValue
        setCodes(codesClone)
    }

    const handleFocus = event => {
        const codeIndex = parseInt(event.target.name.slice(4, 5), 10)
        focus.current = codeIndex
    }

    const onKeyDown = ({ key }) => {
        if (key === "Backspace") {
            console.log(focus.current)
            if (focus.current > 0) {
                if (focus.current === 5 && codesRef.current[5]) {
                    return
                }
                const prevSibling = document.querySelector(
                    `input[name=ssn-${focus.current - 1}]`
                )
                prevSibling.focus()
            }
            return
        }
        if (key === "Enter") {
            // Go to next page
            return
        } else {
            console.log(focus.current)
            if (focus.current < 5) {
                if (focus.current === 0 && !codesRef.current[0]) {
                    return
                }
                const nextSibling = document.querySelector(
                    `input[name=ssn-${focus.current + 1}]`
                )
                nextSibling.focus()
            }
            return
        }
    }

    useEffect(() => {
        codesRef.current = codes
    }, [codes])

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener("keydown", onKeyDown)
        }
    }, [])

    return (
        <Layout>
            <Center>
                <Container>
                    <Politician />
                    <SubTitle>ICE15</SubTitle>
                    <Title>Head Election</Title>
                    <InputsContainer>
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-0"
                            value={codes[0]}
                            type="text"
                            maxLength="1"
                        />
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-1"
                            value={codes[1]}
                            type="text"
                            maxLength="1"
                        />
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-2"
                            value={codes[2]}
                            type="text"
                            maxLength="1"
                        />
                        <Dash />
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-3"
                            value={codes[3]}
                            type="text"
                            maxLength="1"
                        />
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-4"
                            value={codes[4]}
                            type="text"
                            maxLength="1"
                        />
                        <Input
                            ref={focusedInput}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            name="ssn-5"
                            value={codes[5]}
                            type="text"
                            maxLength="1"
                        />
                    </InputsContainer>
                    <Button to="/male">Next</Button>
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
