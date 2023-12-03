import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AddButton = styled(Link)`
  position: fixed;
  text-decoration: none;
  bottom: 20px;
  right: 50px;
  background-color: #558FFF; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  transition: 0.2s ease-in-out;
    &:hover{
        background-color: blue;
    }
  cursor: pointer;
`