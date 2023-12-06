import Dropdown from "../../components/Dropdown/Dropdown"
import NavBar from "../../components/NavBar/NavBar"
import GuestNavBar from "../../components/GuestNavBar/GuestNavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import { Container } from "../../styles/Container"
import { ContentContainer, ExplorePageContainer, FireIcon, CarouselContainer, TopicsHeaderContainer, TopicsSection, CarouselImage, CarouselSlide, CarouselLabel, Carousel, CarouselNav, TopicsContainer, SelectContainer, CheckBox } from "./ExplorePage.styled"
import { useState } from "react"
import { PageHeader } from "../../styles/PageHeader"
import TopicBubble from "../../components/TopicBubble/TopicBubble"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import webDevPicture from "../../assets/web-dev.png"  // https://www.google.com/search?q=web+development&sca_esv=578888506&rlz=1C5CHFA_enCA1022CA1022&tbm=isch&sxsrf=AM9HkKleoNTmOFYy1L2asBqWBw79IrDHJw:1698948188574&source=lnms&sa=X&ved=2ahUKEwj19ZWa86WCAxWaIDQIHdNrDysQ_AUoAXoECAEQAw&biw=1800&bih=986&dpr=2#imgrc=O0Or2_DpELZxxM
import gameDevPicture from "../../assets/game-dev.png" // source: https://itchronicles.com/artificial-intelligence/ai-in-game-development/
import programmingPicture from "../../assets/programming.png" // source: https://www.google.com/search?q=java&tbm=isch&hl=en&chips=q:java,g_1:programming:R3yWj66rrrk%3D&rlz=1C5CHFA_enCA1022CA1022&sa=X&ved=2ahUKEwjSgKaQ8qWCAxWUFTQIHWfNDnkQ4lYoAXoECAEQMQ&biw=1800&bih=986#imgrc=3VOAR5G6kgBfrM&imgdii=c3KSenntr082qM
import { postDatabase, topicDatabase } from "../../database/db"
import { useNavigate } from "react-router-dom"

console.log({postDatabase})

function ExplorePage({isGuestView}) {
    const [status, setStatus] =  useState('Recent')
    const navigate = useNavigate();

    const handleClick = (topicName) => {
        let topics = [];

        topicDatabase.forEach((topic) => {
            if (topic.name === topicName) {
                topic.posts.forEach((post) => {
                    topics.push(post);
                })
            }
        })
        navigate("/CodeConnect/explore-results", {state: {results: topics, searchTerm: topicName, isGuestView: isGuestView}})
    }
    return (
        <Container>
            {isGuestView ? <GuestNavBar /> : <NavBar />}
            <ExplorePageContainer>
                <ContentContainer>
                    <SearchBar data={postDatabase} />
                    <TopicsSection>
                        <TopicsHeaderContainer>
                            <PageHeader>
                                <div><FireIcon icon={faFire}/> Trending</div>
                            </PageHeader>
                        </TopicsHeaderContainer>
                        <CarouselContainer>
                            <Carousel>
                                <CarouselSlide id="slide-1"> 
                                    <CarouselImage src={programmingPicture}/>
                                    <CarouselLabel onClick={() => handleClick("Python")}>Python</CarouselLabel>
                                </CarouselSlide>  
                                <CarouselSlide id="slide-2">
                                    <CarouselImage src={gameDevPicture}/>
                                    <CarouselLabel onClick={() => handleClick("Game Development")}>Game Development</CarouselLabel>
                                </CarouselSlide>    
                                <CarouselSlide id="slide-3">
                                    <CarouselImage src={webDevPicture} />
                                    <CarouselLabel onClick={() => handleClick("React")}>React</CarouselLabel>
                                </CarouselSlide>
                                <CarouselNav>
                                    <a href="#slide-1"></a>
                                    <a href="#slide-2"></a>
                                    <a href="#slide-3"></a>
                                </CarouselNav>            
                            </Carousel>  
                        </CarouselContainer>
                        <TopicsHeaderContainer>
                            <PageHeader>Topics</PageHeader>
                            {/* <SelectContainer>
                                <div>Select</div>
                                <CheckBox type="checkbox"/>
                            </SelectContainer> */}
                        </TopicsHeaderContainer>
                        <TopicsContainer>
                            {
                                topicDatabase.map((topic, i) => (
                                    <TopicBubble key={i} topicName={topic.name} isGuestView={isGuestView}/>
                                ))
                            }
                        </TopicsContainer>
                    </TopicsSection>
                </ContentContainer>
            </ExplorePageContainer>
        </Container>
    )
}

export default ExplorePage