import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SubmitBtn from './SubmitBtn';

function EducationForm(props) {
        const {previewMode, showEducationForm, id, handleChange, 
        handleSubmit} = props;
        const {universityName, city, from, to, degree,
             furtherAchievements, } = props.info;
        let style = {};
        if (!showEducationForm) style = {display: 'none'};
        if (previewMode) style = {display: 'none'};
        
        return (
            <form className='education-form' style={style} onSubmit={handleSubmit} id={id}>
                <TextInput 
                id={id}
                handleChange={handleChange}
                value={universityName}
                placeholder="University or School Name"
                name='universityName' />
                
                <TextInput
                id={id}
                handleChange={handleChange}
                value={city}
                placeholder="City"
                name='city' />
                
                <TextInput
                id={id}
                handleChange={handleChange}
                value={from}
                placeholder="From"
                name='from' />
                
                <TextInput
                id={id}
                handleChange={handleChange}
                value={to}
                placeholder="To"
                name='to' />
                
                <TextInput
                id={id}
                handleChange={handleChange}
                value={degree}
                placeholder="Degree"
                name='degree' />
                
                <TextArea
                id={id}
                handleChange={handleChange}
                value={furtherAchievements}
                placeholder="Further Descriptions or Achievements"
                name='furtherAchievements' />

                <SubmitBtn />
            </form>
        );
}

export default EducationForm;
