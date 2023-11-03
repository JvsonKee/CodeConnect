import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon, TimePosted, PostInformationWrapper, PostReaction } from "./styles/PostBrowsing.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import propTypes from 'prop-types'

function PostBrowsing( {user} ) {
    return (
        <PostContainer>
            <PostWrapper>
                <PostInformationWrapper>
                    <PostUserInformation>
                        <UserProfilePicture src={user.profilePicture}></UserProfilePicture>
                        <UserName>{user.userName}</UserName>
                        <TimePosted>{user.time}</TimePosted>
                    </PostUserInformation>
                    <PostReaction>{user.reaction}</PostReaction>
                </PostInformationWrapper>
                <PostMainContent>
                    <PostTitle>{user.title}</PostTitle>
                    <PostDescription>{user.description}</PostDescription>
                </PostMainContent>
                <TopicsContainer>
                    <TopicOutline>
                        <PostTopic>{user.topic}</PostTopic>
                    </TopicOutline>
                </TopicsContainer>
                <PostAnalytics>
                    <Analytic>
                        <AnalyticIcon icon={faHeart}/>
                        <div>{user.likes} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{user.comments} comments</div>
                    </Analytic>
                    <Analytic>
                        <div>{user.reactions}</div>
                    </Analytic>
                    <Analytic>. . .</Analytic>
                </PostAnalytics>
            </PostWrapper>  
        </PostContainer>
    )
}

PostBrowsing.propTypes = {
    user : propTypes.object
}


export default PostBrowsing