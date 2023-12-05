import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyLevel, ReplyUserInformation, ReplyUserName, ReplyUserProfilePicture, EditButton, EditIcon } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import propTypes from 'prop-types'
import { useState } from 'react';
import GenerateReplyForm from "./ReplyForm";

function ReplyBrowsingFirstLevel ( {user}, i) {
    const { author, content, id } = user;
    const [showReplyForm, setShowReplyForm] = useState(false);

    const openReplyForm = () => {
    setShowReplyForm(true);
    };

    const closeReplyForm = () => {
    setShowReplyForm(false);
    };

    return (
        <>
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
                {/* {showReplyForm && <GenerateReplyForm close={closeReplyForm} />} */}
                <GenerateReplyForm close={closeReplyForm} />
            </ReplyWrapper>
        </>
    )
}

ReplyBrowsingFirstLevel.propTypes = {
    user : propTypes.object
}


export default ReplyBrowsingFirstLevel;