import { ContactHeader, MBarContainer , ContactListItem, ContactProfilePicture, ContactUserName} from "./messageBar.styled";
import { useNavigate } from 'react-router-dom';

function MessageBar({ user, url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  
    return (
        <MBarContainer>
          <ContactListItem onClick={handleClick}>
            <ContactProfilePicture src={user.profilePic}></ContactProfilePicture>
            <ContactUserName>{user.userName}</ContactUserName>
          </ContactListItem>
        </MBarContainer>
      );
}

export default MessageBar