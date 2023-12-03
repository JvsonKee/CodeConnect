import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "./styles/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyUserInformation, ReplyUserName, ReplyUserProfilePicture } from "./styles/ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"

function ReplyBrowsing( {user} ) {
    return (
        <>
            <ReplyContainer>
                <ReplyLine>
                </ReplyLine>
                <ReplyWrapper>
                    <ReplyUserInformation>
                        <ReplyUserProfilePicture src={user.profilePicture}></ReplyUserProfilePicture>
                        <ReplyUserName>{user.userName}</ReplyUserName>
                    </ReplyUserInformation>
                    <br></br>
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