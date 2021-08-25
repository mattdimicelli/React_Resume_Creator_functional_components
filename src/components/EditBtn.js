import React from 'react';

function EditBtn(props) {
        const {handleClick, previewMode, hideEditAndRemoveBtns, id} = props;
        let style = previewMode ? {display: 'none'} : null;
        if (hideEditAndRemoveBtns) style = {display: 'none'};
        return (
            <button id={id} style={style} className='edit-btn' onClick={handleClick}>
                Edit
            </button>
        )
}

export default EditBtn;
