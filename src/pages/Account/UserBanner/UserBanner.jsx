import React from "react";
import styled from "styled-components"
import InfoProfile from "./InfoProfile/InfoProfile";
import MetaProfile from "./MetaProfile/MetaProfile";

const UserBannerContainer = styled.div`
    display: flex;
    padding: 32px 32px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    align-self: stretch;
    background-color: var(--black);
`


function UserBanner({user}){
    return (  
        <UserBannerContainer>
            <InfoProfile user={user}/>
            <MetaProfile user={user}/>
        </UserBannerContainer>
    )
}

export default UserBanner;