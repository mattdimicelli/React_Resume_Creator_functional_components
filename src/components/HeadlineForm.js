import React from 'react';
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';

function HeadlineForm(props) {
        const {previewMode, headline, handleChange,
             handleSubmit, hideDisplayShowForm } = props;
        let style = hideDisplayShowForm ? {} : {display: 'none'};
        return (
            <form class='headline-form' style={style} onSubmit={handleSubmit}>
                <TextInput value={headline} 
                previewMode={previewMode}
                placeholder='Headline'
                handleChange={handleChange}
                />
                <SubmitBtn previewMode={previewMode} />
            </form>
        );
}

export default HeadlineForm;
