import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyLevel, ReplyUserInformation, ReplyUserName, ReplyUserProfilePicture, EditButton, EditIcon } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"

function ReplyPersonalView ( {user} ) {
    return (
        <>
            <ReplyContainer>
                <ReplyLine>
                </ReplyLine>
                <ReplyWrapper>
                    <ReplyUserInformation>
                        <ReplyUserProfilePicture src={user.profilePicture}></ReplyUserProfilePicture>
                        <ReplyUserName>{user.userName}</ReplyUserName>
                        <EditButton>
                            <EditIcon icon={faPen}/>
                        </EditButton>
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


export default ReplyPersonalView;