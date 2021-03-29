import React from 'react';
import PropTypes from 'prop-types';

export const TextInput = ({ title, type, placeholder, value, onChange, name }) => {

    return (
        <div className="text-input">
            <span className="label">{title.toUpperCase()}</span>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className="input"
                    onChange={e => onChange(e.target.value)}
                    value={value}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="input"
                    onChange={e => onChange(e.target.value)}
                    value={value}
                />
            )}
        </div>
    )
}

TextInput.proptypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder:  PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default TextInput;
