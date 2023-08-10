import React from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleyItem';

const ImageGallery = ({ images, onClick }) => {
    return(
        <ul className={css.imageGallery} onClick={onClick}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    webformatURL={image.webformatURL}
                    largeImageURL={image.largeImageURL}
                    user={image.user}
                />
            ))}
        </ul>
    )
};

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//         }),
//     ),
//     onClick: PropTypes.func.isRequired,
// };

export default ImageGallery;