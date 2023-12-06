import React from 'react';
import { ArrowLeft, BackbuttonContainer } from './BackButton.styled';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton() {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <BackbuttonContainer onClick={goBack}>
      <ArrowLeft icon={faArrowLeft}/>
    </BackbuttonContainer>
  );
};

export default BackButton;