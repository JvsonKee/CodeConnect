import { GuestNavContainer , Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem } from "./GuestNavBar.styled";

function GuestNavBar({ handleItemClick }) {
    
    return (
        <GuestNavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <NavItem to="/guest-home">Home</NavItem>
                    <NavItem to="/guest-explore">Explore</NavItem>
                    <NavItem onClick={() => handleItemClick('Direct Messages')}>Direct Messages</NavItem>
                    <NavItem onClick={() => handleItemClick('Profile')}>Profile</NavItem>
                    <PostButton onClick={() => handleItemClick('Post')}>Post</PostButton>
                </NavItems>
            </Nav>
        </GuestNavContainer >
    )
}

export default GuestNavBar;