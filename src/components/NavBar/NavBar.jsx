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
                    <NavItem to="/CodeConnect/">Home</NavItem>
                    <NavItem to="/CodeConnect/explore">Explore</NavItem>
                    <NavItem>Direct Messages</NavItem>
                    <NavItem to="/CodeConnect/account">Profile</NavItem>
                    <PostButton>Post</PostButton>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;