import {ContentContainer, DMHeaderContainer, DMPageContainer, Messages} from "./DMPage.styled";
import MessageList from "./MessageList"
import NavBar from "../../components/NavBar/NavBar"
import { Container } from "../../styles/Container"
import { DMHeader } from "./DMHeader";
import { AddButton } from "../../components/NewDMButton/NewDMButton.styled";
import Dropdown from  "../../components/Dropdown/Dropdown"
import { useState } from "react";
import profilePic1 from "../../assets/userPfp.png"
import profilePic2 from "../../assets/userPfp2.png"
import profilePic3 from "../../assets/userPfp3.png"

//Making user list alphabetical
const user1 ={
    userName: "Boo",
    text: "HAAHAHAHHAHHAHAHAHAHHAHHAHHAHHAHHAHA",
    profilePic: profilePic2
}

const user2 ={
    userName: "Kirby",
    text: "Words words words words. Words words words.",
    profilePic: profilePic1
}

const user3 ={
    userName: "Sonic",
    text: "You just gotta go fast bro",
    profilePic: profilePic3
}

function DMPage() {

    const [status, setStatus] =  useState('Recents')

    return (  
        <Container>
            <NavBar />
            <DMPageContainer>
                <ContentContainer>
                    <DMHeaderContainer>
                        <DMHeader>Direct Messages</DMHeader>
                        <Dropdown setStatus={setStatus}/>
                    </DMHeaderContainer>
                    <Messages>
                        <MessageList user={user1}/>
                        <MessageList user={user2}/>
                        <MessageList user={user3}/>
                    </Messages>
                </ContentContainer>
                <AddButton>New +</AddButton>
            </DMPageContainer>   
        </Container>
    )
}

export default DMPage;