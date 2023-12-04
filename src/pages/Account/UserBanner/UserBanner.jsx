import React from "react";
import styled from "styled-components"
import InfoProfile from "./InfoProfile/InfoProfile";

const UserBannerContainer = styled.div`
    display: flex;
    padding: 36px 80px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: #353845;
`

function UserBanner({user}){
    return (  
        <UserBannerContainer>
            <InfoProfile user={user}/>
        </UserBannerContainer>
    )
}

export default UserBanner;