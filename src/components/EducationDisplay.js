import React from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

function EducationDisplay(props) {
        const {universityName, city, degree,
        from, to, furtherAchievements} = props.info;
        const {previewMode, id, handleClickRemove,
             hideEditAndRemoveBtns, 
             handleClickEditUniversity} = props;
        return (
            <div className='education-display'>
                <p>{universityName.toUpperCase()} {universityName && city ? "--" : ''} {city}</p>
                <p><strong>{degree}{degree ? ',' : ''} &nbsp;</strong>{from} {from && to ? '-' : ''} {to}</p>
                <p>{furtherAchievements}</p>
                <EditBtn
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                id={id}
                handleClick={handleClickEditUniversity} />
                <RemoveBtn
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                handleClick={handleClickRemove}
                id={id} />
            </div>
        );
}

export default EducationDisplay;
