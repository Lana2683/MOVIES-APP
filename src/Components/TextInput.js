import React  from 'react';
import PropTypes from 'prop-types';

export const TextInput = ({ title, type, placeholder }) =>
    <div className="text-input">
        <span className="label">{title.toUpperCase()}</span>
        <input type={type} placeholder={placeholder} className="input"/>
    </div>

TextInput.proptypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder:  PropTypes.string.isRequired,
}

export default TextInput;
