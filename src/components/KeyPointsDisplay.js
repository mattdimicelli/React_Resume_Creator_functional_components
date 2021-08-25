import React from 'react';
import KeyPoint from './KeyPoint';

function KeyPointsDisplay(props) {
        const {previewMode, keyPoints, handleClickEdit, 
        handleClickRemove} = props;
        const keyPointList = Object.entries(keyPoints).map(pair => {
            const [id, keyPointObj ] = pair;
            const {text} = keyPointObj;
            return <KeyPoint handleClickEdit={handleClickEdit}
            handleClickRemove={handleClickRemove}
             key={id} id={id} text={text} previewMode={previewMode} />
        })
        return (
            <ul className='key-points-displays'>
                {keyPointList}
            </ul>
        );
}

export default KeyPointsDisplay;
