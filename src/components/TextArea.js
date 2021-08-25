import React from 'react';

function TextArea(props) {
    
    function autoResize(e) {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    const {handleChange, id, value, name} = props;
        return (
            <textarea
            value={value}
            placeholder={props.placeholder}
            onChange={(e) => handleChange(e, id)}
            onInput={autoResize}
            name={name}
            >
                
            </textarea>
        );
}

export default TextArea;
