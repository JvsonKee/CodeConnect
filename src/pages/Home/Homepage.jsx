import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from './HomePage.styled';
import { PageHeader } from "../../styles/PageHeader"
import NavBar from "../../components/NavBar/NavBar"
import { Container } from "../../styles/Container"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react"
import PostBrowsing from '../../components/PostCards/PostBrowsing'
import { postDatabase } from '../../database/db';

function HomePage() {
    const [status, setStatus] =  useState('Recent');
    const [rerender, setRerenderFlag] =  useState(false);

    const handleRerenderHomepage = () => {
        setRerenderFlag((prev) => !prev);
    };
    const latestPosts = postDatabase.slice().reverse();

    return (  
        <Container>
            <NavBar onPost={handleRerenderHomepage}/>  
            <HomePageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <PageHeader>Home</PageHeader>
                        <Dropdown setStatus={setStatus}/>
                    </HeaderContainer>
                    <Feed>
                        {
                            latestPosts.map((post, i) => (
                                <PostBrowsing key={i} information={post}/>
                            ))
                        }
                    </Feed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default HomePage;