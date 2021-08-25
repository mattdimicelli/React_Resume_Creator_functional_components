import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SubmitBtn from './SubmitBtn';



function WorkExperienceForm(props) {
        const {previewMode, showWorkExperienceForm, id, handleChange, 
            handleSubmit} = props;
            const {companyName, city, from, to, role,
                 furtherAchievements, } = props.info;
            let style = {};
            if (!showWorkExperienceForm) style = {display: 'none'};
            if (previewMode) style = {display: 'none'};

        return (
            <form className='work-experience-form' style={style} onSubmit={handleSubmit} id={id}>

                <TextInput
                placeholder="Company Name"
                id={id}
                handleChange={handleChange}
                value={companyName}
                name='companyName' />

                <TextInput
                id={id}
                handleChange={handleChange}
                value={city}
                placeholder="City"
                name='city' 
                 />

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
                value={role}
                placeholder="Role"
                name='role' />


                <TextArea 
                id={id}
                handleChange={handleChange}
                value={furtherAchievements}
                placeholder="Further Descriptions or Achievements"
                name='furtherAchievements' />

                <SubmitBtn />
            </form>
        )
}

export default WorkExperienceForm;
