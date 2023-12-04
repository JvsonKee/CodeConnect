import { Container } from "../../styles/Container";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar"
import { Feed } from "../Home/HomePage.styled";
import PostBrowsing from "../../components/PostCards/PostBrowsing";
import { ExplorePageContainer } from "./ExplorePage.styled";
import { postDatabase } from "../../database/db";
import { ContentContainer, Matrix, PostCountContent } from "./ExploreResults.styled";
import { useLocation } from "react-router-dom";

function ExploreResults() {
    const { state } = useLocation();
    const { results, searchTerm } = state;
    console.log({results}); 
    console.log({searchTerm})
    return (  
        <Container>
            <NavBar/>
            <ExplorePageContainer>
                <ContentContainer>
                    <SearchBar data={postDatabase}/>
                    <Matrix>
                        {
                            results.length > 2 || results.length == 0
                            ? <PostCountContent>{results.length} results found matching &quot;{searchTerm}&quot;</PostCountContent>
                            : <PostCountContent>{results.length} result found matching &quot;{searchTerm}&quot;</PostCountContent>
                        }
                        <Feed>
                            {results.map((post, i) => 
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