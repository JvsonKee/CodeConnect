import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "./styles/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyLevel } from "./styles/ReplyBrowsing.styled"


function ReplyBrowsing( {user} ) {
    return (
        <>
            <ReplyContainer>
                <ReplyLine>
                </ReplyLine>
                <ReplyWrapper>
                    <PostUserInformation>
                        <UserProfilePicture src={user.profilePicture}></UserProfilePicture>
                        <UserName>{user.userName}</UserName>
                    </PostUserInformation>
                    <PostMainContent>
                        <PostDescription>{user.description}</PostDescription>
                    </PostMainContent>
                    <br></br>
                    <ReplyButton>Reply</ReplyButton>
                </ReplyWrapper>
            </ReplyContainer>
        </>
    )
}

// PostBrowsing.propTypes = {
//     user : propTypes.object
// }


export default ReplyBrowsing;