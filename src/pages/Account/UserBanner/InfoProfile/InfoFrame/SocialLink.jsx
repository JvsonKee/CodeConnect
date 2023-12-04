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
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 28.5C6 30.75 6 24.75 3 24m21 9v-5.805a5.055 5.055 0 0 0-1.41-3.915c4.71-.525 9.66-2.31 9.66-10.5A8.16 8.16 0 0 0 30 7.155a7.605 7.605 0 0 0-.135-5.655S28.095.975 24 3.72a20.07 20.07 0 0 0-10.5 0C9.405.975 7.635 1.5 7.635 1.5A7.605 7.605 0 0 0 7.5 7.155a8.16 8.16 0 0 0-2.25 5.67c0 8.13 4.95 9.915 9.66 10.5a5.055 5.055 0 0 0-1.41 3.87V33"
      />
    </svg>
  )

  const TwitterIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M34.5 4.5a16.35 16.35 0 0 1-4.71 2.295 6.72 6.72 0 0 0-11.79 4.5v1.5A15.99 15.99 0 0 1 4.5 6s-6 13.5 7.5 19.5a17.46 17.46 0 0 1-10.5 3c13.5 7.5 30 0 30-17.25a6.756 6.756 0 0 0-.12-1.245A11.58 11.58 0 0 0 34.5 4.5Z"
      />
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