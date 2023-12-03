import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from './HomePage.styled';
import { PageHeader } from "../../styles/PageHeader"
import NavBar from "../../components/NavBar/NavBar"
import { Container } from "../../styles/Container"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react"
import PostBrowsing from '../../components/PostCards/PostBrowsing'
import profilePicture1 from '../../assets/placeholder-profile-pic.png'
import profilePicture2 from '../../assets/profile2.jpg'
import profilePicture3 from '../../assets/profile3.jpg'
import { postDatabase } from '../../database/db'

const user1 = {
    profilePicture: profilePicture1,
    userName: "JasonSucksAtCoding69",
    title: "Learning React",
    time: "19 minutes ago",
    reaction: "🔥",
    description: "I am learning React for a school project, what are the best resources to learn from?",
    topic: "React",
    likes: "43",
    comments: "59"
}

const user2 = {
    profilePicture: profilePicture2,
    userName: "RealEyesRealizeRealLies",
    title: "Growtopia - My new game!",
    time: "1 hour ago",
    reaction: "🌟",
    description: "I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!",
    topic: "Game Development",
    likes: "203",
    comments: "122"
}

const user3 = {
    profilePicture: profilePicture3,
    userName: "I<3Coding",
    title: "Internship Help",
    time: "4 hours ago",
    reaction: "",
    description: "I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?",
    topic: "Career",
    likes: "94",
    comments: "73"
}


function HomePage() {
    const [status, setStatus] =  useState('Recent')

    return (  
        <Container>
            <NavBar />  
            <HomePageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <PageHeader>Home</PageHeader>
                        <Dropdown setStatus={setStatus}/>
                    </HeaderContainer>
                    <Feed>
                        {postDatabase.map((item, index) => (
                            <PostBrowsing key={index} user={item}/>
                        ))}
                        <PostBrowsing user={user1}/>
                        <PostBrowsing user={user2}/>
                        <PostBrowsing user={user3}/>
                    </Feed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default HomePage;