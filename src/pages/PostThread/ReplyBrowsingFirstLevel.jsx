import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyLevel, ReplyUserInformation, ReplyUserInformationMatrix, ReplyUserName, ReplyUserProfilePicture, EditButton, EditIcon } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import propTypes from 'prop-types'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import GenerateReplyForm from "./ReplyForm";
import { userDatabase } from "../../database/db"
import { useNavigate } from "react-router-dom";

function ReplyBrowsingFirstLevel ( {user, level1, handleRerenderThread, isGuestView}, i) {
    const { author, content } = user;
    const [showReplyForm, setShowReplyForm] = useState(false);
    const { id } = useParams();
    const savedUserKey = localStorage.getItem('userDatabaseKey');
    const isSameUser = (userDatabase[savedUserKey].username == author.username);
    const navigate = useNavigate();

    const openReplyForm = () => {
    setShowReplyForm(true);
    };

    const closeReplyForm = () => {
    setShowReplyForm(false);
    };

    const openUserProfile = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/CodeConnect/profile/' + author.getUsername())
    }

    return (
        <>
            <ReplyWrapper>
                <ReplyUserInformation>
                    <ReplyUserInformationMatrix onClick={openUserProfile}>
                        <ReplyUserProfilePicture src={author.getProfilePicture()}></ReplyUserProfilePicture>
                        <ReplyUserName>{author.getUsername()}</ReplyUserName>
                    </ReplyUserInformationMatrix>
                    {isSameUser && <EditButton>
                                    <EditIcon icon={faPen}/>
                                    </EditButton>
                    }
                </ReplyUserInformation>
                <br></br>
                <PostMainContent>
                    <PostDescription>{content}</PostDescription>
                </PostMainContent>
                <br></br>
                <GenerateReplyForm id={id} level1={level1} level2={-1} closeForm={closeReplyForm} onReplySuccess={handleRerenderThread} isGuestView={isGuestView}/>
            </ReplyWrapper>
        </>
    )
}

ReplyBrowsingFirstLevel.propTypes = {
    user : propTypes.object
}


export default ReplyBrowsingFirstLevel;