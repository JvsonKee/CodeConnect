import {MessageContainer, MessageWrapper, DMUserInformation, DMUserProfilePicture, DMUserName, MessageText, MessageMainContent} from "./MessageList.styled"
import { useNavigate } from 'react-router-dom';

function MessageList({ user, targetUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetUrl);
  };

 return(
    <MessageContainer onClick={handleClick}>
        <MessageWrapper>
            <DMUserInformation>
                <DMUserProfilePicture src={user.profilePic}></DMUserProfilePicture>
                <DMUserName>{user.userName}</DMUserName>
            </DMUserInformation>
            <MessageMainContent>
                <MessageText>{user.text}</MessageText>
            </MessageMainContent>
        </MessageWrapper>
    </MessageContainer>
    )
}


export default MessageList