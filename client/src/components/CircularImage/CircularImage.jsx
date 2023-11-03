import React from 'react';
import CircularImageWrapper from './CircularImageWrapper.styled';

function CircularImage({ src, alt }) {
    return <CircularImageWrapper><img src={src} alt={alt} style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }}/></CircularImageWrapper>;
};

export default CircularImage;