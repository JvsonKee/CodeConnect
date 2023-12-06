import { Container } from "../../styles/Container";
import NavBar from "../../components/NavBar/NavBar";
import GuestNavBar from "../../components/GuestNavBar/GuestNavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import { Feed } from "../Home/HomePage.styled";
import PostBrowsing from "../../components/PostCards/PostBrowsing";
import { ExplorePageContainer } from "./ExplorePage.styled";
import { postDatabase, topicDatabase } from "../../database/db";
import { ArrowLeft, BackButton, ContentContainer, Matrix, PostCountContent, SearchContainer } from "./ExploreResults.styled";
import { useLocation, useParams } from "react-router-dom";
import { SearchBarContainer } from "../../components/SearchBar/SearchBar.styled";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ExploreResults( ) {
    const { id } = useParams();
    const { state } = useLocation();
    console.log('state in ExploreResults:', state);

    const { results, searchTerm, isGuestView} = state;
    const goBack = () => {
        window.history.go(-1);
    };

    console.log({results})
    let topics = [];

    topicDatabase.forEach((topic) => {
        if (topic.name === id) {
            topic.posts.forEach((post) => {
                topics.push(post);
            })
        }
    })

    console.log({topics})
    return (  
        <Container>
            {isGuestView ? <GuestNavBar /> : <NavBar />}
            <ExplorePageContainer>
                <ContentContainer>
                    <SearchBarContainer>
                        <BackButton onClick={goBack}>
                            <ArrowLeft icon={faArrowLeft}/>
                        </BackButton>
                        <SearchContainer>
                            <SearchBar data={postDatabase}/>
                        </SearchContainer>
                    </SearchBarContainer>
                    <Matrix>
                        {
                            topics.length > 2 || topics.length == 0
                            ? <PostCountContent>{topics.length} results found matching &quot;{searchTerm}&quot;</PostCountContent>
                            : <PostCountContent>{topics.length} result found matching &quot;{searchTerm}&quot;</PostCountContent>
                        }
                        <Feed>
                            {topics.map((post, i) => 
                                <PostBrowsing key={i} information={post} />
                            )}
                        </Feed>
                    </Matrix>
                </ContentContainer>
            </ExplorePageContainer>
        </Container>
    )
}

export default ExploreResults;