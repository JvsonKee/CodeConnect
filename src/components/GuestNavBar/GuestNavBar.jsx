import { GuestNavContainer , Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem } from "./GuestNavBar.styled";
import { ContentContainer, HeaderContainer, GuestHomePageContainer, Feed, PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from '../../pages/GuestHome/GuestHomePage.styled';
import { useState } from "react"

function GuestNavBar() {
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
        <GuestNavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <NavItem to='/CodeConnect/guest-home'>Home</NavItem>
                    <NavItem to='/CodeConnect/guest-explore'>Explore</NavItem>
                    <NavItem onClick={() => handleItemClick('Direct Messages')}>Direct Messages</NavItem>
                    <NavItem onClick={() => handleItemClick('Profile')}>Profile</NavItem>
                    <PostButton onClick={() => handleItemClick('Post')}>Post</PostButton>
                </NavItems>
            </Nav>
            {/* Popup */}
            {isPopupVisible && (
                <PopupContainer>
                <PopupContent>
                    <CreateAccountText>Please create an account to access this feature </CreateAccountText>
                    <div></div>
                    <div></div>
                    <CreateAccountButton>Create Account</CreateAccountButton>
                    <CloseButton onClick={handleClosePopup}>Close</CloseButton >
                </PopupContent>
                </PopupContainer>
            )}
        </GuestNavContainer >
        
    )
}

export default GuestNavBar;