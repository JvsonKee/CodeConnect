import { Container } from "../components/styles/Container";
import { UserPageContainer } from "../components/styles/UserPage.styled";
import NavBar from "../components/NavBar";
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