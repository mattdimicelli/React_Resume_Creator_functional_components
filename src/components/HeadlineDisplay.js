import React from 'react';
import EditBtn from './EditBtn';

function HeadlineDisplay(props) {
        const {previewMode, headline, 
            hideDisplayShowForm, handleClickEdit } = props;
        let style = hideDisplayShowForm ? {display: 'none'} : {};
        return (
            <div className='headline-display' style={style}>
                <em>
                    {headline}
                </em>
                <div className='headline-edit-btn-container'>
                    <EditBtn handleClick={handleClickEdit}
                    previewMode={previewMode} />
                </div>
            </div>
        );
}

export default HeadlineDisplay;
