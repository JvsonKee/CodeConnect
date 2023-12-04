import React from 'react';
import styled from 'styled-components';

const H5Style = styled.p`
color: #FFF;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
`



const H5 = ({ children }) => {
    return <H5Style>{children}</H5Style>;
  };

export default H5;