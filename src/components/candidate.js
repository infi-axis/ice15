import React from "react"
import styled from "styled-components"

import Profiles from "./profiles"

const Candidate = ({ name, subname, onClick }) => {
    return (
        <Container onClick={() => onClick(name)}>
            <ProfileImages name={name} />
            <InfoContainer>
                <Name>{name}</Name>
                <SubName>{subname}</SubName>
            </InfoContainer>
        </Container>
    )
}

export default Candidate

const ProfileImages = styled(Profiles)`
    width: 160px;
    height: 160px;
    border-radius: 14px 14px 0 0;
`

const Container = styled.div`
    border-radius: 14px;
    width: 160px;
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
    font-size: 18px;
    font-weight: 600;
    color: #3d3d3d;
`

const SubName = styled(Name)`
    color: #adadad;
    font-weight: 400;
`
