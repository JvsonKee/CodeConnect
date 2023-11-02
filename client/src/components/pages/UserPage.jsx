import { Container } from "../styles/Container";
import { UserPageContainer } from "../styles/UserPage.styled";
import NavBar from "../NavBar";
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