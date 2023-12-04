import React from "react";
import styled from "styled-components"
import RoleChip from "./roleChip";
import TopicArray from "./TopicArray";
import AccountInteractionButton from "./AccountInteractionButton";


const MetaProfileContainer = styled.div`
    display: flex;
    padding: 35px 22px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
`

function MetaProfile({user}){
    return (
        <MetaProfileContainer>
            <RoleChip role={user.role}/>
            <TopicArray interests={user.interests}/>
            <AccountInteractionButton loggedInUser={false}/>
        </MetaProfileContainer>
    )
}

export default MetaProfile;