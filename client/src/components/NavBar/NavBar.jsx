import { NavContainer, Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect } from "./NavBar.styled";

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <div>Home</div>
                    <div>Explore</div>
                    <div>Direct Messages</div>
                    <div>Profile</div>
                    <PostButton>Post</PostButton>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;