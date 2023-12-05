import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyUserInformation, ReplyUserName, ReplyUserProfilePicture } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"

function ReplyBrowsing( {user} ) {
    const { author, content } = user;
 
    return (
        <>
            <ReplyContainer>
                <ReplyLine>
                </ReplyLine>
                <ReplyWrapper>
                    <ReplyUserInformation>
                        <ReplyUserProfilePicture src={author.getProfilePicture()}></ReplyUserProfilePicture>
                        <ReplyUserName>{author.getUsername()}</ReplyUserName>
                    </ReplyUserInformation>
                    <br></br>
                    <PostMainContent>
                        <PostDescription>{content}</PostDescription>
                    </PostMainContent>
                    <br></br>
                </ReplyWrapper>
            </ReplyContainer>
        </>
    )
}

export default ReplyBrowsing;