import { ContentContainer, HeaderContainer, GuestHomePageContainer, Feed, PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from './GuestHomePage.styled';
import { PageHeader } from "../../styles/PageHeader"
import GuestNavBar from "../../components/GuestNavBar/GuestNavBar"
import { Container } from "../../styles/Container"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react"
import PostBrowsing from '../../components/PostCards/PostBrowsing'
import { postDatabase } from '../../database/db';

function GuestHomePage() {
    // **SKETCHY WAY TO HANDLE GUESTS**
    // clear any user key that could have been saved before
    localStorage.removeItem("userDatabaseKey");
  
    const [status, setStatus] = useState('Recent');
    const latestPosts = postDatabase.slice().reverse();

    return (  
      <Container>
          <GuestNavBar /> 
              <GuestHomePageContainer>
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
              </GuestHomePageContainer>
      </Container>
    );
  }
  
  export default GuestHomePage;