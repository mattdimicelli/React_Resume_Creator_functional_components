import React from 'react';

function SubmitBtn(props) {
        const style = props.previewMode ? {display: 'none'} : null;
        return (
            <button
             style={style}
            className='submit-btn'
            >
                Submit
            </button>
        );
}

export default SubmitBtn;
