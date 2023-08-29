import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css'

const Button = ({ onClick, disabled, style }) => (
    <button className={css.button} onClick={onClick} disabled={disabled} style={style}>
        Load More
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
