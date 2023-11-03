import React from 'react';

const headlineStyle = {
  fontSize: '17px',
  color: 'white',
  textAlign: 'center',
  fontWeight: '600',
  letterSpacing: '1.25px',
  lineHeigt: 'normal'
};

function Headline({ text }){
  return (
    <p style={headlineStyle}>
      { text }
    </p>
      
  );
};

export default Headline;