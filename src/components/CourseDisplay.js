import React from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

function CourseDisplay(props) {
        const {previewMode, title, id, hideEditAndRemoveBtns,
        handleClickRemove, handleClickEditCourse} = props;

        if (title) {
            return (
                <li>
                    {title}
                    <div>
                        <EditBtn
                        previewMode={previewMode}
                        handleClick={handleClickEditCourse}
                        hideEditAndRemoveBtns={hideEditAndRemoveBtns}
                        id={id} />

                        <RemoveBtn
                        previewMode={previewMode}
                        hideEditAndRemoveBtns={hideEditAndRemoveBtns}
                        id={id}
                        handleClick={handleClickRemove}
                        />
                    </div>
                </li>
            )
    } else {return null;}
}

export default CourseDisplay;
