import { NavContainer, Nav, NavItems, NavLogo, PostButton } from "./styles/NavBar.styled";

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo>CodeConnect</NavLogo>
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