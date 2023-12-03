import { NavContainer, Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem, NavIcon } from "./NavBar.styled";
import { faHouseChimney, faMagnifyingGlass, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavItem to="/CodeConnect/home">
                    <NavLogo>
                        <NavLogoCode>Code</NavLogoCode>
                        <NavLogoConnect>Connect</NavLogoConnect>
                    </NavLogo>  
                </NavItem>
                <NavItems>
                    <NavItem to="/CodeConnect/home">
                        <NavIcon icon={faHouseChimney}/>
                        <span>Home</span>
                    </NavItem>
                    <NavItem to="/CodeConnect/explore">
                        <NavIcon icon={faMagnifyingGlass}/>
                        <span>Explore</span>
                    </NavItem>
                    <NavItem to='/CodeConnect/direct-messages'>
                        <NavIcon icon={faComment} />
                        <span>Messages</span>
                    </NavItem>
                    <NavItem to="/CodeConnect/account">
                        <NavIcon icon={faUser}/>
                        <span>Profile</span>
                    </NavItem>
                    <PostButton>Post</PostButton>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;