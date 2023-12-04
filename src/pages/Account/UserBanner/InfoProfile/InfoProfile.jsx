import React from "react";
import styled from "styled-components"
import InfoFrame from "./InfoFrame/InfoFrame";
import ProfilePicture from "./ProfilePicture/ProfilePicture";


const InfoProfileContainer = styled.div`
    display: flex;
    width: 906px;
    min-height: 150px;
    max-height: 300px;
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