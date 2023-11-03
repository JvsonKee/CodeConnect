import { Container } from "./styles/Container";
import NavBar from "./NavBar";
import { ExploreResultsContainer, CustomCard, CustomCardBody, CustomCardText, InteractButtons } from "./styles/ExploreResultsContainer.styled";
import { Card } from "react-bootstrap";
import SearchBar from "./SearchBar"
import { Image } from 'react-bootstrap';

import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import profilePic from './images/profile-pic.jpg';


function CreateAccount() {
    return (  
        <Container>
            <NavBar/>
            <ExploreResultsContainer>

                <SearchBar/>

                <CustomCard>
                    <CustomCardBody>
    
                        <span class = 'img-span'>
                            <Image class = 'profileImg' src = {profilePic} width = '60px' height = '60px' roundedCircle />
                        </span>

                        <p class = "username">hackerman123</p>

                        <span class = 'topic'>
                            <p>Programming</p>
                        </span>
                                
                        <CustomCardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum
                        </CustomCardText>

                        <InteractButtons>
                            <span> <ThumbUpIcon /> </span>
                            <span> <CommentIcon/> </span>
                            <span><EmojiEmotionsIcon /></span>
                            <span> <MoreHorizIcon /></span>  
                        </InteractButtons>
                        

                    </CustomCardBody>
                </CustomCard>

                <CustomCard>
                    <CustomCardBody>
    
                        <span class = 'img-span'>
                            <Image class = 'profileImg' src = {profilePic} width = '60px' height = '60px' roundedCircle />
                        </span>

                        <p class = "username">hackerman123</p>

                        <span class = 'topic'>
                            <p>Programming</p>
                        </span>
                                
                        <CustomCardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum
                        </CustomCardText>

                        <InteractButtons>
                            <span> <ThumbUpIcon /> </span>
                            <span> <CommentIcon/> </span>
                            <span><EmojiEmotionsIcon /></span>
                            <span> <MoreHorizIcon /></span>  
                        </InteractButtons>
                        

                    </CustomCardBody>
                </CustomCard>

                <CustomCard>
                    <CustomCardBody>
    
                        <span class = 'img-span'>
                            <Image class = 'profileImg' src = {profilePic} width = '60px' height = '60px' roundedCircle />
                        </span>

                        <p class = "username">hackerman123</p>

                        <span class = 'topic'>
                            <p>Programming</p>
                        </span>
                                
                        <CustomCardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum
                        </CustomCardText>

                        <InteractButtons>
                            <span> <ThumbUpIcon /> </span>
                            <span> <CommentIcon/> </span>
                            <span><EmojiEmotionsIcon /></span>
                            <span> <MoreHorizIcon /></span>  
                        </InteractButtons>
                        

                    </CustomCardBody>
                </CustomCard>

                <CustomCard>
                    <CustomCardBody>
    
                        <span class = 'img-span'>
                            <Image class = 'profileImg' src = {profilePic} width = '60px' height = '60px' roundedCircle />
                        </span>

                        <p class = "username">hackerman123</p>

                        <span class = 'topic'>
                            <p>Programming</p>
                        </span>
                                
                        <CustomCardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum
                        </CustomCardText>

                        <InteractButtons>
                            <span> <ThumbUpIcon /> </span>
                            <span> <CommentIcon/> </span>
                            <span><EmojiEmotionsIcon /></span>
                            <span> <MoreHorizIcon /></span>  
                        </InteractButtons>
                        

                    </CustomCardBody>
                </CustomCard>



            </ExploreResultsContainer>
        </Container>
    )
}

export default CreateAccount;