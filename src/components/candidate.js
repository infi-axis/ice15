import React from "react"
import styled from "styled-components"

import Profiles from "./profiles"

const Candidate = ({ name, subname, onClick, selected }) => {
    return (
        <Container onClick={onClick}>
            <ProfileImages name={name} />
            <InfoContainer isSelected={selected}>
                <Name isSelected={selected}>{name}</Name>
                <SubName isSelected={selected}>{subname}</SubName>
            </InfoContainer>
        </Container>
    )
}

export default Candidate

const ProfileImages = styled(Profiles)`
    width: 100%;
    border-radius: 14px 14px 0 0;
`

const Container = styled.div`
    border-radius: 14px;
    width: 140px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 3rem;
    width: 100%;

    padding: 0.75rem 1rem;
    border-radius: 0 0 14px 14px;
    background: #f5f5f5;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #3d3d3d;
`

const SubName = styled(Name)`
    font-weight: 400;
    color: #adadad;
`
