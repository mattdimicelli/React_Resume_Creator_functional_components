import React, {useState} from 'react';
import SubmitBtn from './SubmitBtn';
import TextInput from './TextInput';



function KeyPointsForm(props) {
    const [keyPointText, setKeyPointText] = useState('');

    function handleChange(e) {
        setKeyPointText(e.target.value);
    }

        const {handleSubmitKeyPointForm, previewMode, showKeyPointForm,
             id, } = props;
        const style = showKeyPointForm ? {} : {display: 'none'};
        return (
            <form className='key-point-form' style={style} onSubmit={(e) => handleSubmitKeyPointForm(e, keyPointText, id)}>
                <div className='kp-input-and-btn-container'>
                    <TextInput
                     value={keyPointText}
                     placeholder='Key Point'
                     previewMode={previewMode}
                     handleChange={handleChange}
                      />
                    <div className='kp-form-btns'>
                        <SubmitBtn
                        previewMode={previewMode}  />
                    </div>
                </div>
            </form>
        );
}

export default KeyPointsForm;
