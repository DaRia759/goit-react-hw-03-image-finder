import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, user, largeImageURL }) => {
    return (
        <li className={css.imageGalleryItem}>
            <img
                className={css.img}
                src={webformatURL}
                alt={user}
                data-fullsize={largeImageURL}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
