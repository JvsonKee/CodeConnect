import React from "react";
import styled from "styled-components"
import RoleChip from "./roleChip";
import TopicArray from "./TopicArray";
import AccountInteractionButton from "./AccountInteractionButton";


const MetaProfileContainer = styled.div`
    display: flex;
    height: 300px;
    padding: 35px 22px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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