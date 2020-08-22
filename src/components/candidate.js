import React from "react"
import styled from "styled-components"

const Candidate = props => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <SubName>{props.subname}</SubName>
        </Container>
    )
}

export default Candidate

const Container = styled.div`
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
