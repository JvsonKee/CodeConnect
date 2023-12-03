import React from "react";
import EditProfileContainerStyle from "./EditProfileContainer.styled";
import { PostButton } from "../../../components/NavBar/NavBar.styled";
import styled from "styled-components";

const ExtendedPostButton = styled(PostButton)`
padding-left: 10px;
padding-right: 10px;
`;

const EditProfileContainerComponent = ({ showButton }) => {
    return (
        <EditProfileContainerStyle>
          {showButton && (
            <ExtendedPostButton>Edit Profile</ExtendedPostButton>
          )}
        </EditProfileContainerStyle>
      );
  };
  
export default EditProfileContainerComponent;

  