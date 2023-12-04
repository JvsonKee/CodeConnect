import React from 'react';
import styled from 'styled-components';

const UserProfilePicture = styled.img`
  width:200px;
  height:200px;
  align-self: stretch;
  object-fit: cover;
  border-radius: 300px;
`


function ProfilePicture({imageUrl}){
  return (
      <UserProfilePicture src={imageUrl} alt="Profile" />
  );
};

export default ProfilePicture;