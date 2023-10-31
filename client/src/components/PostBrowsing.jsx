import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "./styles/PostBrowsing.styled"
import profilePicture from '../assets/placeholder-profile-pic.png'
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"

const PostInfo = {
    profilePicture: profilePicture,
    userName: "Placeholder-Username",
    topic: "Web Development",
    title: "Title",
    description: "This is a description with lots of information about nothing",
    likes: "123",
    reactions: "⭐️",
    comments: "50"
}

function PostBrowsing() {
    return (
        <PostContainer>
            <PostWrapper>
                <PostUserInformation>
                    <UserProfilePicture src={PostInfo.profilePicture}></UserProfilePicture>
                    <UserName>{PostInfo.userName}</UserName>
                </PostUserInformation>
                <PostMainContent>
                    <PostTitle>{PostInfo.title}</PostTitle>
                    <PostDescription>{PostInfo.description}</PostDescription>
                </PostMainContent>
                <TopicsContainer>
                    <TopicOutline>
                        <PostTopic>{PostInfo.topic}</PostTopic>
                    </TopicOutline>
                </TopicsContainer>
                <PostAnalytics>
                    <Analytic>
                        <AnalyticIcon icon={faHeart}/>
                        <div>{PostInfo.likes} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{PostInfo.comments} comments</div>
                    </Analytic>
                    <Analytic>
                        <div>{PostInfo.reactions}</div>
                    </Analytic>
                </PostAnalytics>
            </PostWrapper>  
        </PostContainer>
    )
}

export default PostBrowsing