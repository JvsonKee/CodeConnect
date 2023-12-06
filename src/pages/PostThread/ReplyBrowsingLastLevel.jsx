import { PostAnalytics, PostContainer, PostDescription, Analytic, PostMainContent, PostTitle, PostTopic, TopicOutline, PostUserInformation, PostWrapper, TopicsContainer, UserName, UserProfilePicture, AnalyticIcon } from "../../components/PostCards/PostBrowsing.styled"
import { ReplyContainer, ReplyWrapper, ReplyLine, ReplyButton, ReplyUserInformation, ReplyUserInformationMatrix, ReplyUserName, ReplyUserProfilePicture, EditButton, EditIcon } from "./ReplyBrowsing.styled"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import { userDatabase } from "../../database/db"
import { useNavigate } from "react-router-dom";

function ReplyBrowsing( {user} ) {
    const { author, content } = user;
    let isSameUser = 0;
    const savedUserKey = localStorage.getItem('userDatabaseKey');
    if (savedUserKey) {
        isSameUser = (userDatabase[savedUserKey].username == author.username);
    }
    const navigate = useNavigate();

    const openUserProfile = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/CodeConnect/profile/' + author.getUsername())
    }
    return (
        <>
            <ReplyContainer>
                <ReplyLine>
                </ReplyLine>
                <ReplyWrapper>
                    <ReplyUserInformation>
                        <ReplyUserInformationMatrix onClick={openUserProfile}>
                            <ReplyUserProfilePicture src={author.getProfilePicture()}></ReplyUserProfilePicture>
                            <ReplyUserName>{author.getUsername()}</ReplyUserName>
                        </ReplyUserInformationMatrix>
                        {isSameUser !=0 && <EditButton>
                                            <EditIcon icon={faPen}/>
                                            </EditButton>
                        }
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