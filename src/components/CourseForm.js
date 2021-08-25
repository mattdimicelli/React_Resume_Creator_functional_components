import React from 'react';
import SubmitBtn from './SubmitBtn';
import TextInput from './TextInput';

function CourseForm(props) {
        const { previewMode, id, title, showCourseForm,
            handleChange, handleSubmit } = props;
        let style =  showCourseForm ?  {} : {display: 'none'}; 
        if (previewMode) style = {display: 'none'};
        
        return (
            <form
            onSubmit={handleSubmit}
            style={style}
            id={id}
            className='course-form'>
                <TextInput
                 handleChange={handleChange}
                 value={title}
                 id={id} />
                <SubmitBtn />
            </form>
        );
}

export default CourseForm;
