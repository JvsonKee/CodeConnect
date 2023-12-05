import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyUserInformation, ReplyUserName, ReplyUserProfilePicture } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import GenerateReplyForm from "./ReplyForm";

function ReplyBrowsing( {user}, i ) {
    const { author, content } = user;
    const [showReplyForm, setShowReplyForm] = useState(false);

    const openReplyForm = () => {
    setShowReplyForm(true);
    };

    const closeReplyForm = () => {
    setShowReplyForm(false);
    };

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
                    <GenerateReplyForm show={showReplyForm} close={closeReplyForm} />
                </ReplyWrapper>
            </ReplyContainer>
        </>
    )
}

export default ReplyBrowsing;