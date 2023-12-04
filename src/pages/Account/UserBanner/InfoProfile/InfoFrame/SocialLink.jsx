import React from "react";
import styled from "styled-components";
import H5 from "../../../typography/h5";

const SocialLinkContainer = styled.div`
    display: flex;
    width: 287px;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
`

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75A5.07 5.07 0 0 0 20.41 1S19.23.65 16.5 2.48a13.38 13.38 0 0 0-7 0C6.77.65 5.59 1 5.59 1a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 4 8.55c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
)

  const TwitterIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23.5 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3.5 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0 0 23.5 3Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
  

function SocialLink({network, username}){

    const getIcon = () => {
        switch (network) {
          case 'twitter':
            return <TwitterIcon />;
          case 'github':
            return <GithubIcon />;
        }
      };

    return (  
        <SocialLinkContainer>
            {getIcon()}
            <H5>{username}</H5>
        </SocialLinkContainer>
    )
}

export default SocialLink;