import { ContactHeader, MBarContainer , ContactListItem, ContactProfilePicture, ContactUserName} from "../messageBar.styled";

function MessageBar({user}) {
    return (
        <MBarContainer>
          <ContactListItem>
            <ContactProfilePicture src={user.profilePic}></ContactProfilePicture>
            <ContactUserName>{user.userName}</ContactUserName>
          </ContactListItem>
        </MBarContainer>
      );
}

export default MessageBar