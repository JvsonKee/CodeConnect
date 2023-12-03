import { ContentContainer, HeaderContainer, GuestHomePageContainer, Feed, PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from './GuestHomePage.styled';
import { PageHeader } from "../../styles/PageHeader"
import GuestNavBar from "../../components/GuestNavBar/GuestNavBar"
import { Container } from "../../styles/Container"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react"
import PostBrowsing from '../../components/PostCards/PostBrowsing'
import { postDatabase } from '../../database/db';

function GuestHomePage() {

    const [status, setStatus] = useState('Recent');
    const [isPopupVisible, setPopupVisible] = useState(false);
  
    const handleItemClick = (itemName) => {
      if (itemName === 'Direct Messages' || itemName === 'Profile' || itemName === 'Post') {
        setPopupVisible(true);
      }
    };
  
    const handleClosePopup = () => {
      setPopupVisible(false);
    };

    return (  
        <Container>
            <GuestNavBar handleItemClick={handleItemClick}/> 
                <GuestHomePageContainer>
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
                </GuestHomePageContainer>
      {/* Popup */}
      {isPopupVisible && (
        <PopupContainer>
          <PopupContent>
            <CreateAccountText>Please create an account to access this feature </CreateAccountText>
            <div></div>
            <div></div>
            <CreateAccountButton>Create Account</CreateAccountButton>
            <CloseButton  onClick={handleClosePopup}>Close</CloseButton >
          </PopupContent>
        </PopupContainer>
      )}

      </Container>
    );
  }
  
  export default GuestHomePage;