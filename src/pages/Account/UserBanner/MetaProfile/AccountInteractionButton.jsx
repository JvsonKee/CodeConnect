import React from "react";
import styled from "styled-components"


const AccountInteractionButtonContainer = styled.div`
    display: flex;
    padding: 10px 4px;;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`
const TextStyle = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #3a3d4b;
`
const BigButtonShape = styled.div`
    display: flex;
    padding: 4px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 4px;
    background: #558FFF;
`

const SmallButtonStyle = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1.5px solid #35383E;
    background: #252527;
`

const MoreIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
      />
    </svg>
  )

function EditProfileButton(){
    const Usercolour = {
        backgroundColor: "#3A3D4B",
        borderRadius: "8px",
        border: '1.5px solid #45484F'
      };
    return (
        <BigButtonShape style={Usercolour}>
            <TextStyle>Edit Profile</TextStyle>
        </BigButtonShape>
    )
}

function UserInteractionButton(){
    const Usercolour = {
        backgroundColor: "#558FFF",
        borderRadius: "8px"
    };
    const TColor = {
        backgroundColor: "#558FFF"
    };

    return (
        <BigButtonShape style={Usercolour}>
            <TextStyle style={TColor}>Follow</TextStyle>
        </BigButtonShape>
    )
}


function AccountInteractionButton({loggedInUser}){
    const getButton = () => {
        switch (loggedInUser) {
          case true:
            return <EditProfileButton />;
          case false:
            return <UserInteractionButton />;
        }
      };

    return (
        <AccountInteractionButtonContainer>
            {getButton()}
            {!loggedInUser ? <SmallButtonStyle> <MoreIcon/> </SmallButtonStyle> : null}            
        </AccountInteractionButtonContainer>
    )
}

export default AccountInteractionButton;