import React from "react";
import NoPostContainer from "./NoPost.styled";

function NoPostDialogue({src}){
    return (
      <NoPostContainer>
        <img src={src} alt="Nothing" style={{ fill: '#FFFFFF' }}/> 
        <p style={{ color: '#FFFFFF' }}>Posts will appear here. Currently there are none </p>
      </NoPostContainer>
    );
  };
  
  export default NoPostDialogue;