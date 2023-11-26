import { Container } from "../../styles/Container";
import { UserPageContainer } from "./UserPage.styled";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import { EditProfileContainer } from "./EditProfileContainer.styled";
import ProfileSurface from "./ProfileSurface/ProfileSurface";
import { CentralColumn } from "./CentralColumn";
import { HeaderRow } from "./HeaderRow";
import Headline from "./typography/Headline";

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