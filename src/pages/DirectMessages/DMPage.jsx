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
import { useNavigate } from 'react-router-dom';

const user1 ={
    userName: "Boo",
    text: "HAHAHHAHAHAH.",
    profilePic: profilePic2
}

const user2 ={
    userName: "Kirby",
    text: "Words words words words. Words words words.",
    profilePic: profilePic1
}

const user3 ={
    userName: "Sonic",
    text: "Gotta go fast bro",
    profilePic: profilePic3
}

function DMPage() {
    const navigate = useNavigate();  

    const user1TargetUrl = '/CodeConnect/dm-boo';
    const user2TargetUrl = '/CodeConnect/dm-kirby';
    const user3TargetUrl = '/CodeConnect/dm-sonic';

    const [status, setStatus] =  useState('Recents')

    return (  
        <Container>
            <NavBar />
            <DMPageContainer>
                <ContentContainer>
                    <DMHeaderContainer>
                        <DMHeader>Direct Messages</DMHeader>
                    </DMHeaderContainer>
                    <Messages>
                        <MessageList user={user1} targetUrl={user1TargetUrl}/>
                        <MessageList user={user2} targetUrl={user2TargetUrl}/>
                        <MessageList user={user3} targetUrl={user3TargetUrl}/>
                    </Messages>
                </ContentContainer>
                <AddButton  to="/CodeConnect/new-direct-message">New +</AddButton>
            </DMPageContainer>   
        </Container>
    )
}

export default DMPage;