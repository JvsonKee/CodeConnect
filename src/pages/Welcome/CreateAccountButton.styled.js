import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CreateAccountButton = styled(Link)`
  margin-top: 50px;
  color: var(--grey);
  background-color: var(--black);
  border: none;
  cursor: pointer;
  font-size: 14px;

  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--white);
    transform: translateY(-3px);
  }
`