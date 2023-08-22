import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem ({ webformatURL, user, largeImageURL, onClickPhoto }) {
    return (
        <li className={css.imageGalleryItem}>
            <img
                className={css.img}
                src={webformatURL}
                alt={`${user}`}
                onClick={() => {
                    onClickPhoto(largeImageURL);
                }}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClickPhoto: PropTypes.func.isRequired,
};

