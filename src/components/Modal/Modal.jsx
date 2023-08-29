import React from 'react';
import css from './Modal.module.css';


const Modal = ({url, cleanURL}) => {
    return (
        <div className={css.overlay} onClick={cleanURL}>
            <img src={url} alt="selectedImage" className={css.modal}/>
        </div>
    )
};

export default Modal;

