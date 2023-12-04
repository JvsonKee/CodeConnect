import React from "react";
import styled from "styled-components"
import InfoFrame from "./InfoFrame/InfoFrame";
import ProfilePicture from "./ProfilePicture/ProfilePicture";


const InfoProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`

function InfoProfile({user}){
    return (  
        <InfoProfileContainer>
            <ProfilePicture imageUrl={user.getProfilePicture()}/>
            <InfoFrame username={user.getUsername()} biography={user.getBiography()} socialLinks={user.getSocialMedia()}/>
        </InfoProfileContainer>
    )
}

export default InfoProfile;