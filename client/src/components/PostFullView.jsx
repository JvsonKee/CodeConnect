import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "./styles/PostBrowsing.styled"
import { PinButton, PinIcon, PostUserInformationFullView, UserProfilePictureFullView, UserNameFullView } from "./styles/PostFullView.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import GenerateReplyForm from "./ReplyForm";
import propTypes from 'prop-types'

function PostFullView( {user} ) {
    return (
        <PostContainer>
            <PostWrapper>
                <PostUserInformationFullView>
                    <UserProfilePictureFullView src={user.profilePicture}></UserProfilePictureFullView>
                    <UserNameFullView>{user.userName}</UserNameFullView>
                    <PinButton>
                        <PinIcon icon={faThumbtack}/>
                    </PinButton>
                </PostUserInformationFullView>
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