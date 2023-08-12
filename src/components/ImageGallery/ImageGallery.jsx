import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleyItem';

export default function ImageGallery ({ images, onClick }) {
    return(
        <ul className={css.imageGallery} onClick={onClick}>
            {images.map(({id, webformatURL, largeImageURL, user}) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    user={user}
                />
            ))}
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
    onClick: PropTypes.func.isRequired,
};
