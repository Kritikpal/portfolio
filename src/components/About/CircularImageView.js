import React from 'react';
import { Image } from 'react-bootstrap';

const CircularImageView = ({ imageUrl, altText, borderRadius, radius }) => {
    const imgStyle = {
        borderRadius: borderRadius || '50%',
        width: radius || '150px', // Default width
        height: radius || '150px', // Default height
    };

    return (
        <Image src={imageUrl} alt={altText} style={imgStyle} />
    );
};

export default CircularImageView;
