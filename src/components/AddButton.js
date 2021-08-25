import React from 'react';

function AddButton(props) {
        const {clickHandler, thingToAdd, previewMode} = props;
        const style = previewMode ? {display: 'none'} : null;
        const theClassName = thingToAdd === 'Course' ? 'add-course-btn' : 'add-btn';
        return (
            <button className={theClassName} onClick={clickHandler} style={style}>
                + {thingToAdd}
            </button>
        )
}

export default AddButton;
