import { GuestNavContainer , Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem, NavIcon } from "./GuestNavBar.styled";
import { ContentContainer, HeaderContainer, GuestHomePageContainer, Feed, PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from '../../pages/GuestHome/GuestHomePage.styled';
import { faHouseChimney, faMagnifyingGlass, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
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
                    <NavItem to="/CodeConnect/guest-home">
                        <NavIcon icon={faHouseChimney}/>
                        <span>Home</span>
                    </NavItem>
                    <NavItem to="/CodeConnect/guest-explore">
                        <NavIcon icon={faMagnifyingGlass}/>
                        <span>Explore</span>
                    </NavItem>
                    <NavItem onClick={() => handleItemClick('Direct Messages')}>
                        <NavIcon icon={faComment} />
                        <span>Messages</span>
                    </NavItem>
                    <NavItem onClick={() => handleItemClick('Profile')}>
                        <NavIcon icon={faUser}/>
                        <span>Profile</span>
                    </NavItem>
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