import styled from 'styled-components'

export const ContactHeader =styled.div`
   font-size: 30px;
   font-weight: 500;
   color: var(--white);

`
export const MBarContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: #1B1B1B;
   border-radius: 10px;
   border: 1px solid grey;
   height: 73px;
   transition: 0.1s ease-in-out;
   &:hover{
       background-color: grey;
   }
   cursor: pointer;
`
export const ContactListItem = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`
export const ContactProfilePicture = styled.img`
   width: 60px;
   border-radius: 100px;
`
export const ContactUserName = styled.div`
   font-size: 25px;
   color: var(--white);
`