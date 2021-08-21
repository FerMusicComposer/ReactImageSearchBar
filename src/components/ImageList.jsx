import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });
    return (
        <div className="ui three column grid">
            <div className="image-list">{images}</div>
        </div>
    );
};

export default ImageList;