import React from 'react';

const bodyStyle = {
  fontSize: '16px',
  color: 'white',
  textAlign: 'center',
  fontWeight: '400',
  letterSpacing: '1.25px',
  lineHeigt: 'normal'
};


function Body({ text }){
  return (
    <p style={bodyStyle}>
      { text }
    </p>
      
  );
};

export default Body;