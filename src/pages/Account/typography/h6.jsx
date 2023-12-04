import React from 'react';
import styled from 'styled-components';

const H6Style = styled.p`
color: #8F8F8F;
font-family: Inter;
background-color: #353845;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`



const H6 = ({ children }) => {
    return <H6Style>{children}</H6Style>;
  };

export default H6;