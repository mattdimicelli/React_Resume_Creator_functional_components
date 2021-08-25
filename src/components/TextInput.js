import React from 'react';

export default function TextInput(props) {
        const {handleChange, name, placeholder,
            previewMode, value, id} = props;

        const style = previewMode ? {display: 'none'} : {};
        return(
            <input
             style={style}
             value={value}
            name={name}
            onChange={id !== undefined ? (e) => handleChange(e, id) : handleChange}
            type="text"
            placeholder={placeholder}
            className='text-input'
             />
        );
}