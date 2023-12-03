import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon, TimePosted, PostInformationWrapper, PostReaction } from "./PostBrowsing.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import propTypes from 'prop-types'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function PostBrowsing( {information} ) {
    const navigate = useNavigate();

    const handleClick = () => {
        let posturl = information.getPostURL().url;
        navigate(posturl);
    };

    const [likeCount, setLikeCount] = useState(information.likes);
    return (
        <PostContainer>
            <PostWrapper onClick={handleClick}>
                <PostInformationWrapper>
                    <PostUserInformation>
                        <UserProfilePicture src={information.author.getProfilePicture()}></UserProfilePicture>
                        <UserName>{information.author.getUsername()}</UserName>
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
                        <div onClick={() => {
                            information.like();
                            setLikeCount(information.likes);
                        }}>
                            <AnalyticIcon icon={faHeart}/>
                        </div>
                        <div>{likeCount} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{information.comments.length} comments</div>
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