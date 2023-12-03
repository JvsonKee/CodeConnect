import { Container } from "../../styles/Container";
import { UserPageContainer } from "./UserPage.styled";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import EditProfileContainer from "./EditProfileContainer/EditProfileContainer";
import ProfileSurface from "./ProfileSurface/ProfileSurface";
import { CentralColumn } from "./CentralColumn";
import { HeaderRow } from "./HeaderRow";
import Headline from "./typography/Headline";
import Postframe from "./PostFrame/Postframe";
import EditProfileContainerComponent from "./EditProfileContainer/EditProfileContainer";

function UserPage(){
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
            <EditProfileContainerComponent showButton={false}/>
                    <CentralColumn>
                        <ProfileSurface/>
                        <HeaderRow>
                            <Headline text={"Posts"}/>
                        </HeaderRow>
                        <Postframe postList = {[]}></Postframe>
                    </CentralColumn>
                <EditProfileContainerComponent showButton={true}/>
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;