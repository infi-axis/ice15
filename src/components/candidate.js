import React from "react"
import styled from "styled-components"

import Profiles from "./profiles"

const Candidate = ({ name, subname, onClick, cid, selected }) => {
    const isSelected = selected === cid

    return (
        <Container onClick={() => onClick(cid)}>
            <ProfileImages name={name} />
            <InfoContainer isSelected={isSelected}>
                <Name isSelected={isSelected}>{name}</Name>
                <SubName isSelected={isSelected}>{subname}</SubName>
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
    background: ${props => (props.isSelected ? "#2d74fe" : "#f5f5f5")};
`

const Name = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${props => (props.isSelected ? "#f5f5f5" : "#3d3d3d")};
`

const SubName = styled(Name)`
    font-weight: 400;
    color: ${props => (props.isSelected ? "#e0e0e0" : "#adadad")};
`
