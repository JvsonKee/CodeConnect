import React from 'react';
import styled from 'styled-components';

const H1Style = styled.p`
color: #FFF;
font-family: Inter;
font-size: 94px;
font-style: normal;
font-weight: 300;
line-height: normal;
`



const H1 = ({ children }) => {
    return <H1Style>{children}</H1Style>;
  };

export default H1;