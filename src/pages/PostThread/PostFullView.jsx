import { PostAnalytics, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon, LikedHeart } from "../../components/PostCards/PostBrowsing.styled"
import { PostThreadContainer, PostThreadWrapper} from "./PostFullView.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import GenerateReplyForm from "./ReplyForm";
import propTypes from 'prop-types'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { postDatabase } from '../../database/db';
import { useNavigate } from "react-router-dom";

function PostFullView({handleRerenderThread, isGuestView}) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [liked, setLiked] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();
    const post = postDatabase[id];
    const profilePic = post.author.getProfilePicture();
    const username = post.author.getUsername();

    const openReplyForm = () => {
    setShowReplyForm(true);
    };

    const closeReplyForm = () => {
    setShowReplyForm(false);
    };

    const likePost = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!liked) {
            post.like();
            setLiked(true);
        } else {
            post.dislike();
            setLiked(false);
        }
    }

    const openUserProfile = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/CodeConnect/profile/' + post.author.getUsername())
    }

    return (
        <PostThreadContainer>
            <PostThreadWrapper>
                <PostUserInformation onClick={openUserProfile}>
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
                        <div onClick={likePost}>
                            {
                                liked ? <LikedHeart icon={solidHeart} /> : <AnalyticIcon icon={faHeart}/>
                            }
                        </div>  
                        <div>{post.likes} likes</div>
                    </Analytic>
                    <Analytic>
                        <AnalyticIcon icon={faComment}/>
                        <div>{post.getCommentsTotal()} comments</div>
                    </Analytic>
                    <Analytic>
                        <div>{post.reactions}</div>
                    </Analytic>
                </PostAnalytics>
                <GenerateReplyForm id={id} level1={-1} level2={-1} onReplySuccess={handleRerenderThread} closeForm={closeReplyForm} isGuestView={isGuestView}/>
            </PostThreadWrapper>
        </PostThreadContainer>
    )
}


export default PostFullView