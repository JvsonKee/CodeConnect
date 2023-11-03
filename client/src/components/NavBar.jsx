import { NavContainer, Nav, NavItems, ActiveItem, NavLogo, PostButton, NavLogoCode, NavLogoConnect } from "./styles/NavBar.styled";
import { useState } from 'react';
import GeneratePostForm from "./PostForm";

function NavBar() {
    const [showPostForm, setShowPostForm] = useState(false);

    const openPostForm = () => {
    setShowPostForm(true);
    };

    const closePostForm = () => {
    setShowPostForm(false);
    };

    return (
        <NavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoCode>Code</NavLogoCode>
                    <NavLogoConnect>Connect</NavLogoConnect>
                </NavLogo>  
                <NavItems>
                    <ActiveItem>Home</ActiveItem>
                    <div>Explore</div>
                    <div>Direct Messages</div>
                    <div>Profile</div>
                    <PostButton className="stretched-link" onClick={openPostForm}>Post</PostButton>
                    <GeneratePostForm showForm={showPostForm} closeForm={closePostForm} />

                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar;