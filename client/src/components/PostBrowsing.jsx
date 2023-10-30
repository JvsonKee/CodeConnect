import { PostAnalytics, PostComments, PostContainer, PostDescription, PostLikes, PostMainContent, PostReactions, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture } from "./styles/PostBrowsing.styled"
import profilePicture from '../assets/placeholder-profile-pic.png'

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
                    <PostLikes>💜 {PostInfo.likes} likes</PostLikes>
                    <PostReactions>{PostInfo.reactions}</PostReactions>
                    <PostComments>{PostInfo.comments} comments</PostComments>
                </PostAnalytics>
            </PostWrapper>
        </PostContainer>
    )
}

export default PostBrowsing