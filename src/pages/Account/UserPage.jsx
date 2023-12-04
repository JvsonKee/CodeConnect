import { Container } from "../../styles/Container";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import UserBanner from "./UserBanner/UserBanner";
import styled from "styled-components"
import BackgroundBase from "./BackgroundBase/BackgroundBase";

const UserPageContainer = styled.div`
    width: 80vw;
    height: 100vh;  
    margin-left: 20vw;
    background-color: #2B2D37;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

function UserPage({user}){
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
                <UserBanner user = {user}></UserBanner>
                <BackgroundBase post = {user}></BackgroundBase> {/* make it user.posts */}
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;