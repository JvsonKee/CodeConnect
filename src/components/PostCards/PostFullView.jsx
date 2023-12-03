import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "./styles/PostBrowsing.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import GenerateReplyForm from "./ReplyForm";
import propTypes from 'prop-types'

function PostFullView( {user} ) {
    return (
        <PostContainer>
            <PostWrapper>
                <PostUserInformation>
                    <UserProfilePicture src={user.profilePicture}></UserProfilePicture>
                    <UserName>{user.userName}</UserName> 
                </PostUserInformation>
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
                </PostAnalytics>
                <GenerateReplyForm /> 
            </PostWrapper>  
        </PostContainer>
    )
}

PostFullView.propTypes = {
    user : propTypes.object
}


export default PostFullView