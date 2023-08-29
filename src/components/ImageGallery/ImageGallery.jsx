import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery ({ images, onClick }) {
    return (
        <ul className={css.imageGallery}>
            {images && images?.map(({ id, webformatURL, largeImageURL, user}) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        user={user}
                        largeImageURL={largeImageURL}
                        onClickPhoto={onClick}
                    />
                );
            })}
        </ul>
    );
};


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};
