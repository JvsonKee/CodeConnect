import {ContentContainer, DMHeaderContainer, DMPageContainer, Messages} from "./styles/DMPage.styled";
import MessageList from "./MessageList"
import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import { DMHeader } from "./styles/DMHeader";
import { AddButton } from "./styles/NewDMButton.styled";
import Dropdown from "./Dropdown";
import { useState } from "react";
import profilePic1 from "../assets/userPfp.png"
import profilePic2 from "../assets/userPfp2.png"
import profilePic3 from "../assets/userPfp3.png"

const user1 ={
    userName: "Kirby",
    text: "Words words words words. Words words words.",
    profilePic: profilePic1
}
const user2 ={
    userName: "Boo",
    text: "HAAHAHAHHAHHAHAHAHAHHAHHAHHAHHAHHAHA",
    profilePic: profilePic2
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