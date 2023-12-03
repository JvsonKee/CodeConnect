import { NavContainer, Nav, NavItems, NavLogo, PostButton, NavLogoCode, NavLogoConnect, NavItem } from "./NavBar.styled";
import { useState } from 'react';
import GeneratePostForm from "../PostCards/PostForm";

function NavBar() {
    const [showPostForm, setShowPostForm] = useState(false);

    const openPostForm = () => {
    setShowPostForm(true);
    };

    const closePostForm = () => {
    setShowPostForm(false);
    };

    // const handleSubmitPost = () => {
    //     console.log('post form read: ', formData);
    // };

    return (
        <NavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <NavItem to="/CodeConnect/home">Home</NavItem>
                    <NavItem to="/CodeConnect/explore">Explore</NavItem>
                    <NavItem to='/CodeConnect/direct-messages'>Direct Messages</NavItem>
                    <NavItem to="/CodeConnect/account">Profile</NavItem>
                    <PostButton onClick={openPostForm}>Post</PostButton>
                    <GeneratePostForm showForm={showPostForm} closeForm={closePostForm} />
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;