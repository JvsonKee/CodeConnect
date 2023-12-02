import {MessageContainer, MessageWrapper, DMUserInformation, DMUserProfilePicture, DMUserName, MessageText, MessageMainContent} from "./MessageList.styled"

function MessageList({user}){
 return(
    <MessageContainer>
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