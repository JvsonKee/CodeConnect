import React from 'react';
import styled from 'styled-components';

const H1Style = styled.p`
color: #FFF;
background-color: var(--black);
font-size: 60px;
font-style: normal;
font-weight: 300;
line-height: normal;
`

const H1 = ({ children }) => {
    return <H1Style>{children}</H1Style>;
  };

export default H1;