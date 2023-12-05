import { PostAnalytics, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { PostThreadContainer, PostThreadWrapper} from "./PostFullView.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import GenerateReplyForm from "./ReplyForm";
import propTypes from 'prop-types'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { postDatabase } from '../../database/db';

function PostFullView({handleRerenderThread}) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const { id } = useParams();

    const openReplyForm = () => {
    setShowReplyForm(true);
    };

    const closeReplyForm = () => {
    setShowReplyForm(false);
    };

    const post = postDatabase[id];
    const profilePic = post.author.getProfilePicture();
    const username = post.author.getUsername();

    return (
        <PostThreadContainer>
            <PostThreadWrapper>
                <PostUserInformation>
                    <UserProfilePicture src={profilePic}></UserProfilePicture>
                    <UserName>{username}</UserName> 
                </PostUserInformation>
                <PostMainContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostDescription>{post.content}</PostDescription>
                </PostMainContent>
                <TopicsContainer>
                    <TopicOutline>
                        <PostTopic>{post.topic}</PostTopic>
                    </TopicOutline>
                </TopicsContainer>
                <PostAnalytics>
                    <Analytic>
                        <AnalyticIcon icon={faHeart}/>
                        <div>{post.likes} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{post.comments.length} comments</div>
                    </Analytic>
                    <Analytic>
                        <div>{post.reactions}</div>
                    </Analytic>
                </PostAnalytics>
                <GenerateReplyForm id={id} level1={-1} level2={-1} onReplySuccess={handleRerenderThread} closeForm={closeReplyForm} />
            </PostThreadWrapper>
        </PostThreadContainer>
    )
}


export default PostFullView