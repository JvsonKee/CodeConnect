import { Container } from "../../styles/Container";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import UserBanner from "./UserBanner/UserBanner";
import styled from "styled-components"
import BackgroundBase from "./BackgroundBase/BackgroundBase";
import { useParams } from "react-router-dom";
import { userDatabase } from "../../database/db";

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

function UserPage(){
    const { userName } = useParams();
    const user = userDatabase.find(it => it.username == userName);
    console.log(user)
    return (  
        <Container>
            <NavBar />  
            <UserPageContainer>
                <UserBanner user = {user}></UserBanner>
                <BackgroundBase posts = {user.getPosts()}></BackgroundBase>
            </UserPageContainer>
        </Container>
    )
}

export default UserPage;