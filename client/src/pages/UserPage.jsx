import { Container } from "../components/styles/Container";
import { UserPageContainer } from "../components/styles/UserPage.styled";
import NavBar from "../components/NavBar";
import React from "react";
import { EditProfileContainer } from "../components/styles/EditProfileContainer.styled";
import ProfileSurface from "../components/ProfileSurface/ProfileSurface";

function UserPage(){
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
                <EditProfileContainer/>
                <ProfileSurface/>
                <EditProfileContainer/>
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;