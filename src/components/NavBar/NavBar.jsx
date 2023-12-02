import { NavContainer, Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem } from "./NavBar.styled";

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/explore">Explore</NavItem>
                    <NavItem>Direct Messages</NavItem>
                    <NavItem to="/account">Profile</NavItem>
                    <PostButton>Post</PostButton>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;