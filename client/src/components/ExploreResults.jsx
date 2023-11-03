import { Container } from "./styles/Container";
import NavBar from "./NavBar";
import { ExploreResultsContainer, CustomCard, CustomCardBody, CustomCardText, InteractButtons, ContentContainer } from "./styles/ExploreResultsContainer.styled";
import { Card } from "react-bootstrap";
import SearchBar from "./SearchBar"
import { Image } from 'react-bootstrap';
import { Feed } from "./styles/HomePage.styled";

import profilePicture1 from '../assets/placeholder-profile-pic.png'
import profilePicture2 from '../assets/profile2.jpg'

import { useState } from "react";
import PostBrowsing from "./PostBrowsing";



const user1 = {
    profilePicture: profilePicture1,
    userName: "JasonSucksAtCoding69",
    title: "Learning React",
    time: "19 minutes ago",
    reaction: "🔥",
    description: "I need to learn React for a project for one of my courses, what are the best resources to learn from?",
    topic: "React",
    likes: "43",
    comments: "59"
}

const user2 = {
    profilePicture: profilePicture2,
    userName: "RealEyesRealizeRealLies",
    title: "Growtopia - My new game!",
    time: "1hr ago",
    reaction: "🔥",
    description: "I've been developing a farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!",
    topic: "Game Development",
    likes: "203",
    comments: "122"
}

const user3 = {
    profilePicture: profilePicture1,
    userName: "booper_dooper",
    title: "Having a career crisis - what to do",
    time: '5hrs ago',
    reaction: "🔥",
    description: 'Help a homie out who\'s having a career crisis',
    topic: 'Career',
    likes: '10',
    comments: '12'
}

function CreateAccount() {
    const [status, setStatus] =  useState('Recent')

    return (  
        <Container>
            <NavBar/>
            <ExploreResultsContainer>
                
                <SearchBar/>    {/*Search Bar from Explore Page*/}
                <ContentContainer>
                    <Feed>
                        <PostBrowsing user={user1}/>
                        <PostBrowsing user={user2}/>
                        <PostBrowsing user={user3}/>
                    </Feed>
                </ContentContainer>
                


                
                



            </ExploreResultsContainer>
        </Container>
    )
}

export default CreateAccount;