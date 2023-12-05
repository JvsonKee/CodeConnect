import React from 'react';
import { BackbuttonContainer } from './BackButton.styled';

function BackButton() {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <BackbuttonContainer onClick={goBack}>
      Back
    </BackbuttonContainer>
  );
};

export default BackButton;