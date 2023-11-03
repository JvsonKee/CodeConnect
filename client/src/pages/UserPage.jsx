import { Container } from "../components/styles/Container";
import { UserPageContainer } from "../components/styles/UserPage.styled";
import NavBar from "../components/NavBar";
import React from "react";
import { EditProfileContainer } from "../components/styles/EditProfileContainer.styled";
import ProfileSurface from "../components/ProfileSurface/ProfileSurface";
import { CentralColumn } from "../components/styles/CentralColumn";
import { HeaderRow } from "../components/styles/HeaderRow";
import Headline from "../components/typography/Headline";

function UserPage(){
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
                <EditProfileContainer/>
                    <CentralColumn>
                        <ProfileSurface/>
                        <HeaderRow>
                            <Headline text={"Posts"}/>
                        </HeaderRow>
                    </CentralColumn>
                <EditProfileContainer/>
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;