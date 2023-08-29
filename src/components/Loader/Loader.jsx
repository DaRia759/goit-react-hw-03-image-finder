import React from 'react';
import PropTypes from 'prop-types';
import css from './Loader.module.css'; 

const Spinner = ({ show }) => {
    if (!show) {
        return null; 
    }

    return (
        <div className={css.spinnerOverlay}>
            <div className={css.spinner}></div>
        </div>
    );
};

Spinner.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default Spinner;
