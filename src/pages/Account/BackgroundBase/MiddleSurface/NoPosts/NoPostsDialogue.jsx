import React from "react";
import styled from 'styled-components'

const NoPostContainer = styled.div`  
    display: flex;
    padding: 32px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`
const NoPostText = styled.p`
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background:#353845;
`

const NoPostIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={182}
      height={127}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M52.183 106.583a9.038 9.038 0 0 1-6.018-2.284L.288 63.517l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.584 63.517l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85l-.011-.001Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228L121.248 93a9.065 9.065 0 0 0-.723 12.763 9.067 9.067 0 0 0 12.759.803h-.001Zm-42.408 12.846 18.133-108.8a9.061 9.061 0 0 0-14.218-8.91 9.063 9.063 0 0 0-3.66 5.924l-18.134 108.8a9.065 9.065 0 0 0 7.452 10.438 9.66 9.66 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571h-.004Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.288 0h181.424v126.936H.288z" />
        </clipPath>
      </defs>
    </svg>
)

function NoPostDialogue(){
    return (
      <NoPostContainer>
        <NoPostIcon/>
        <NoPostText>There are currently no posts</NoPostText>
      </NoPostContainer>
    );
  };
  
  export default NoPostDialogue;