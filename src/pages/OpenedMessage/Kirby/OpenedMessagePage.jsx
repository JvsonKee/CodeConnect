import {MessageHeaderContainer, OpenMessageContainer, ChatWrapper, ChatContainer, ChatBox, ContactsBar, TextBox, TextBoxContainer, SendButton, MessageBarHeaderContainer, ExitButton} from "./OpenedMessage.styled"
import {UsersNameHeader, UserProfilePicture} from "../../../components/OpenedMessageHeader/OpenMessageHeader"
import NavBar from "../../../components/NavBar/NavBar"
import { AddButton } from "../../../components/NewDMButton/NewDMButton.styled";
import { MessageBarHeader } from "../../../components/ContactBar/MessageBarHeader";
import { Container } from "../../../styles/Container"
import MessageBox from "../MessageBox";
import MessageBar from "../../../components/ContactBar/messageBar"
import profilePic1 from "../../../assets/userPfp.png"
import profilePic2 from "../../../assets/userPfp2.png"
import profilePic3 from "../../../assets/userPfp3.png"
import profilePic from "../../../assets/MainUserPfp.png"
import React from "react";
import { useNavigate } from 'react-router-dom';

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
    
    const navigate = useNavigate();

    // Define target URLs for each user
    const user1TargetUrl = '/CodeConnect/dm-boo';
    const user2TargetUrl = '/CodeConnect/dm-kirby';
    const user3TargetUrl = '/CodeConnect/dm-sonic';

    return (
        <Container>
            <NavBar />
            <OpenMessageContainer>
                <ChatWrapper>
                    <ChatContainer>
                        <MessageHeaderContainer>
                            <UserProfilePicture src={profilePic1}></UserProfilePicture>
                            <UsersNameHeader>Kirby</UsersNameHeader>
                            <ExitButton to='/CodeConnect/direct-messages'>X</ExitButton>
                        </MessageHeaderContainer>
                        <ChatBox>
                            <MessageBox user={user1}/>
                            <MessageBox user={mainUser}/>
                            <MessageBox user={user1}/> 
                            <MessageBox user={mainUser}/>  
                            <MessageBox user={user1}/>     
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
                    <MessageBar user={user2} url={user1TargetUrl}/>
                    <MessageBar user={user1} url={user2TargetUrl}/>
                    <MessageBar user={user3} url={user3TargetUrl}/>
                </ContactsBar>
                <AddButton to="/CodeConnect/new-direct-message">New +</AddButton>
            </OpenMessageContainer>
        </Container>
    )
    
}

export default OpenedMessagePage;