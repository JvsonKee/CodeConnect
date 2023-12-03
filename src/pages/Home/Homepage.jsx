import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from './HomePage.styled';
import { PageHeader } from "../../styles/PageHeader"
import NavBar from "../../components/NavBar/NavBar"
import { Container } from "../../styles/Container"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react"
import PostBrowsing from '../../components/PostCards/PostBrowsing'
import { postDatabase } from '../../database/db';

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
                        {
                            postDatabase.map((post, i) => (
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