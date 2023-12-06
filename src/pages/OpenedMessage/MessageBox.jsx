import {MessageBoxContainer, MessageBoxWrapper, UserInformation, UserProfilePicture, UserName, MessageContent, MessageText} from "./MessageBox.styled"

function MessageBox({message}) {
    const { author, profilepic, content } = message;
    return (
        <MessageBoxContainer>
            <MessageBoxWrapper>
                <UserInformation>
                    <UserProfilePicture src={profilepic}></UserProfilePicture>
                    <UserName>{author}</UserName>
                </UserInformation>
                <MessageContent>
                    <MessageText>{content}</MessageText>
                </MessageContent>
            </MessageBoxWrapper>
        </MessageBoxContainer>

    )

}

export default MessageBox;