import {MessageBoxContainer, MessageBoxWrapper, UserInformation, UserProfilePicture, UserName, MessageContent, MessageText} from "./MessageBox.styled"

function MessageBox({user, text}) {
    return (
        <MessageBoxContainer>
            <MessageBoxWrapper>
                <UserInformation>
                    <UserProfilePicture src={user.profilePic}></UserProfilePicture>
                    <UserName>{user.userName}</UserName>
                </UserInformation>
                <MessageContent>
                    <MessageText>{user.message}</MessageText>
                </MessageContent>
            </MessageBoxWrapper>
        </MessageBoxContainer>

    )

}

export default MessageBox;