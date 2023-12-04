import React from "react";
import styled from "styled-components"


const RoleChipContainer = styled.div`
    display: flex;
    padding: 6px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    background: #558FFF;
`

const H4Style = styled.p`
color: #FFF;
font-family: Inter;
font-size: 33px;
font-style: normal;
background: #558FFF;
font-weight: 400;
line-height: normal;
`

function RoleChip({role}){
    return (  
        <RoleChipContainer>
            <H4Style>{role}</H4Style>
        </RoleChipContainer>
    )
}

export default RoleChip;