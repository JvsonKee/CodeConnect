import React from "react";
import styled from "styled-components"


const AccountInteractionButtonContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`
const TextStyle = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const BigButtonShape = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
`

const SmallButtonStyle = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1.5px solid #35383E;
    background: #252527;
`

const MoreIcon = (props) => (
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
        d="M18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM28.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  )

function EditProfileButton(){
    const Usercolour = {
        backgroundColor: "##3A3D4B",
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