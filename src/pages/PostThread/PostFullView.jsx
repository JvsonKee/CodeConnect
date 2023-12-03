import { PostAnalytics, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { PostThreadContainer, PostThreadWrapper} from "./PostFullView.styled"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import GenerateReplyForm from "./ReplyForm";
import propTypes from 'prop-types'

function PostFullView( {post} ) {
    return (
        <PostThreadContainer>
            <PostThreadWrapper>
                <PostUserInformation>
                    <UserProfilePicture src={post.author.getProfilePicture()}></UserProfilePicture>
                    <UserName>{post.author.getUsername()}</UserName> 
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
                        <div>{post.comments} comments</div>
                    </Analytic>
                    <Analytic>
                        <div>{post.reactions}</div>
                    </Analytic>
                </PostAnalytics>
                {/* <GenerateReplyForm />  */}
            </PostThreadWrapper>  
        </PostThreadContainer>
    )
}

PostFullView.propTypes = {
    post : propTypes.object
}


export default PostFullView