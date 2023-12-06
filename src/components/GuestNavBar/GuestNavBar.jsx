import { GuestNavContainer , Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem, NavIcon } from "./GuestNavBar.styled";
import { ContentContainer, HeaderContainer, GuestHomePageContainer, Feed, PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from '../../pages/GuestHome/GuestHomePage.styled';
import { faHouseChimney, faMagnifyingGlass, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function GuestNavBar() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();
    const handleItemClick = (itemName) => {
      if (itemName === 'Direct Messages' || itemName === 'Profile' || itemName === 'Post') {
        setPopupVisible(true);
      }
    };
    
    const sendToCreateAccount = () => {
        navigate("/CodeConnect/create-account");
    }

  
    const handleClosePopup = () => {
      setPopupVisible(false);
    };
    return (
        <GuestNavContainer>
            <Nav>
                <NavLogo to="/CodeConnect/home">  
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
                    <PostButton onClick={sendToCreateAccount}>Create Account</PostButton>
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