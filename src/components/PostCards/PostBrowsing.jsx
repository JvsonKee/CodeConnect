import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon, TimePosted, PostInformationWrapper, PostReaction, ProfileContainer, LikedHeart } from "./PostBrowsing.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import propTypes from 'prop-types'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function PostBrowsing( {information} ) {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    
    const openPost = () => {
        let postURL = information.getPostURL().url;
        const savedUserKey = localStorage.getItem('userDatabaseKey');
        if (savedUserKey != null){
            navigate("/CodeConnect".concat(postURL));
        }
        else {
            navigate("/CodeConnect/guest-view".concat(postURL));
        }
    }

    const likePost = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!liked) {
            information.like();
            setLiked(true);
        } else {
            information.dislike();
            setLiked(false);
        }
    }

    const openUserProfile = (e) => {
        e.stopPropagation();
        e.preventDefault();

        // implement logic here : eyram
    }

    return (
        <PostContainer onClick={openPost}> 
            <PostWrapper>
                <PostInformationWrapper>
                    <PostUserInformation>
                        <ProfileContainer onClick={openUserProfile}>
                            <UserProfilePicture src={information.author.getProfilePicture()}></UserProfilePicture>
                            <UserName>{information.author.getUsername()}</UserName>
                        </ProfileContainer>
                        <TimePosted>{information.timestamp}</TimePosted>
                    </PostUserInformation>
                    <PostReaction>{information.reaction}</PostReaction>
                </PostInformationWrapper>
                <PostMainContent>
                    <PostTitle>{information.title}</PostTitle>
                    <PostDescription>{information.content}</PostDescription>
                </PostMainContent>
                <TopicsContainer>
                    <TopicOutline>
                        <PostTopic>{information.topic}</PostTopic>
                    </TopicOutline>
                </TopicsContainer>
                <PostAnalytics>
                    <Analytic>
                        <div onClick={likePost}>
                            {
                                liked ? <LikedHeart icon={solidHeart}/> : <AnalyticIcon icon={faHeart}/>
                            }
                        </div>
                        <div>{information.likes} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{information.getCommentsTotal()} comments</div>
                    </Analytic>
                    <Analytic>. . .</Analytic>
                </PostAnalytics>
            </PostWrapper>  
        </PostContainer>
    )
}

PostBrowsing.propTypes = {
    information : propTypes.object
}


export default PostBrowsing