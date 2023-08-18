import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleyItem';

export default function ImageGallery ({ images, onClick }) {
    return(
        <ul className={css.imageGallery} onClick={onClick}> 
                <ImageGalleryItem/>
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
