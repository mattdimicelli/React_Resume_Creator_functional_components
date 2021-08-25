import React from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

export default function WorkExperienceDisplay(props) {
    const {companyName, city, role,
            from, to, furtherAchievements} = props.info;

    const {previewMode, id, handleClickRemove,
        hideEditAndRemoveBtns, handleClickEdit}
         = props;

        return (
            <div className='work-experience-display'>
                <p>{companyName.toUpperCase()} {companyName && city ? '--' : ''} {city}</p>
                <p><strong>{role}{role ? ',' : ''} &nbsp;</strong>{from} {from && to ? '-' : ''} {to}</p>
                <p>{furtherAchievements}</p>

                <EditBtn
                previewMode={previewMode}
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                id={id}
                handleClick={handleClickEdit}
                 />

                <RemoveBtn 
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                handleClick={handleClickRemove}
                id={id} />

            </div>
        );
}

