import React from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

function KeyPoint(props) {
        const {previewMode, text, id, handleClickEdit,
        handleClickRemove} = props;
        if (text === '') return null;
        return (
            <li>
                 {text}
                <div className='kp-bnts'>
                    <EditBtn
                    handleClick={(e) => handleClickEdit(e, id, text)}
                     previewMode={previewMode}
                      />

                    <RemoveBtn
                        id={id}
                     handleClick={handleClickRemove}
                      previewMode={previewMode}
                       />
                </div>
            </li>
        );
}

export default KeyPoint;
