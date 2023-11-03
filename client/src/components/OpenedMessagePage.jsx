import {MessageHeaderContainer, OpenMessageContainer, ChatWrapper, ChatContainer, ChatBox, ContactsBar, TextBox, TextBoxContainer, SendButton, MessageBarHeaderContainer} from "./styles/OpenedMessage.styled"
import {UsersNameHeader, UserProfilePicture} from "./styles/OpenMessageHeader"
import NavBar from "./NavBar";
import { AddButton } from "./styles/NewDMButton.styled";
import { MessageBarHeader } from "./styles/MessageBarHeader";
import { Container } from "./styles/Container";
import MessageBox from "./MessageBox";
import MessageBar from "./MessageBar"
import profilePic1 from "../assets/userPfp.png"
import profilePic2 from "../assets/userPfp2.png"
import profilePic3 from "../assets/userPfp3.png"
import profilePic from "../assets/MainUserPfp.png"
import React from "react";

const mainUser ={
    message: "Words words words words. Words words words.",
    userName: "PixelPioneer",
    profilePic: profilePic
}

const user1 ={
    message: "Words words words words. Words words words.",
    userName: "Kirby",
    profilePic: profilePic1
}
const user2 ={
    userName: "Boo",
    profilePic: profilePic2
}

const user3 ={
    userName: "Sonic",
    profilePic: profilePic3
}

function OpenedMessagePage() {
    return (
        <Container>
            <NavBar />
            <OpenMessageContainer>
                <ChatWrapper>
                    <ChatContainer>
                        <MessageHeaderContainer>
                            <UserProfilePicture src={profilePic1}></UserProfilePicture>
                            <UsersNameHeader>Kirby</UsersNameHeader>
                        </MessageHeaderContainer>
                        <ChatBox>
                            <MessageBox user={user1}/>
                            <MessageBox user={mainUser}/>
                            <MessageBox user={user1}/> 
                            <MessageBox user={mainUser}/>        
                        </ChatBox>
                        <TextBoxContainer>
                            <TextBox rows="2" cols="20"></TextBox>
                            <SendButton>Send</SendButton>
                        </TextBoxContainer>
                    </ChatContainer>
                </ChatWrapper>
                <ContactsBar>
                    <MessageBarHeaderContainer>
                        <MessageBarHeader>Messages</MessageBarHeader>
                    </MessageBarHeaderContainer>
                    <MessageBar user={user1}/>
                    <MessageBar user={user3}/>
                    <MessageBar user={user2}/>
                </ContactsBar>
                <AddButton>New +</AddButton>
            </OpenMessageContainer>
        </Container>
    )
    
}

export default OpenedMessagePage;