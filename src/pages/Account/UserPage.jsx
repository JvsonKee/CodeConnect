import { Container } from "../../styles/Container";
import { UserPageContainer } from "./UserPage.styled";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";

function UserPage(){
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;