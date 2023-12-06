import { NavContainer, Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem, NavIcon } from "./NavBar.styled";
import { faHouseChimney, faMagnifyingGlass, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { userDatabase } from "../../database/db";
import GeneratePostForm from "../PostCards/PostForm";

function NavBar({onPost}) {
    const [showPostForm, setShowPostForm] = useState(false);
    const userKey = localStorage.getItem("userDatabaseKey");
    let userProfile = "/CodeConnect/profile/PixelPioneer";
    if (userKey >= 0) {
        const user = userDatabase[userKey];
        const userName = user.username;
        userProfile = "/CodeConnect/profile/".concat(userName);
    }

    const openPostForm = () => {
    setShowPostForm(true);
    };

    const closePostForm = () => {
    setShowPostForm(false);
    };

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
                    <NavItem to={userProfile}>
                        <NavIcon icon={faUser}/>
                        <span>Profile</span>
                    </NavItem>
                    <PostButton onClick={openPostForm}>Post</PostButton>
                    {showPostForm && <GeneratePostForm showForm={showPostForm} closeForm={closePostForm} onPostSuccess={onPost} />}
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;